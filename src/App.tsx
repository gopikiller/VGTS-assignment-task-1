import { useEffect } from 'react';
import { listAllMeals } from './store/slices/mealsSlice';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { Col, Row } from 'antd';
import { MealCard } from './components/MealCard/MealCard';

const App: React.FC = () => {
    const meal = useAppSelector(state => state.meals);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(listAllMeals());
    }, [dispatch]);

    return (
        <>
            {meal.loading && <p>loading...</p>}
            {meal.meals.length > 0 && (
                <Row gutter={[8, 8]}>
                    {meal.meals.map((m, i) => (
                        <Col key={i} span={6}>
                            <MealCard id={Number(m.idMeal)} title={m.strMeal} thumb={m.strMealThumb} area={m.strArea} category={m.strCategory} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
};

export default App;
