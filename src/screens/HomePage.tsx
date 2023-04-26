import { useEffect, useState } from 'react';
import { listAllMeals } from '../store/slices/mealsSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Col, Input, Row, Spin } from 'antd';
import { MealCard } from '../components/MealCard/MealCard';
import { Meal } from '../types/MealTypes';
import { SearchOutlined } from '@ant-design/icons';

const HomePage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const meal = useAppSelector(state => state.meals);
    const [mealResult, setMealResult] = useState<Meal[]>(meal.meals);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(listAllMeals());
    }, [dispatch]);

    useEffect(() => {
        try {
            const regX = new RegExp(`${searchTerm.toString()}`, 'i');
            const meals = meal.meals.filter(m => m.strMeal.match(regX));
            if (meals.length > 0) {
                setMealResult(meals);
            } else {
                // if not found: return all meals
                setMealResult(meal.meals);
            }
        } catch (error) {
            setMealResult(meal.meals);
        }
    }, [meal.meals, searchTerm]);

    return (
        <>
            <Input prefix={<SearchOutlined />} placeholder="Filter by name (e.g: beef)" onChange={e => setSearchTerm(e.target.value)} style={{ marginBottom: '1em' }} />
            {meal.loading && <Spin />}
            {!meal.loading && meal.meals.length > 0 && (
                <Row gutter={[8, 8]}>
                    {mealResult.map((m, i) => (
                        <Col key={i} span={6}>
                            <MealCard id={Number(m.idMeal)} title={m.strMeal} thumb={m.strMealThumb} area={m.strArea} category={m.strCategory} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
};

export default HomePage;
