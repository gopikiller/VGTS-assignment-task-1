import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getMealDetails } from '../store/slices/mealDetailsSlice';
import { Card, Col, Row, Image, Typography, Tag, Spin, Button } from 'antd';
import { Meal } from '../types/MealTypes';

export const MealDetails: React.FC = () => {
    const params = useParams();

    const meal = useAppSelector(state => state.mealDetail);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (params.mealId) {
            dispatch(getMealDetails(Number(params.mealId)));
        }
    }, [dispatch, params.mealId]);

    const [visible, setVisible] = useState(false);

    const getIngredientsWithMeasure = useCallback(
        (key: keyof Meal) => {
            const ingredients: string[] = [];
            for (let index = 1; index <= 10; index++) {
                if (!meal.meals) return;
                const element = meal.meals[`${key}${index}` as keyof Meal];
                ingredients.push(element);
            }
            return ingredients;
        },
        [meal.meals],
    );

    return (
        <div>
            {meal.loading ? (
                <Spin />
            ) : (
                meal.meals && (
                    <Card title={meal.meals.strMeal} bordered={false}>
                        <Row>
                            <Col span={6}>
                                <Image preview={{ visible: false }} src={meal.meals.strMealThumb} onClick={() => setVisible(true)} />
                                <div style={{ display: 'none' }}>
                                    <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                                        <Image src={meal.meals.strMealThumb} />
                                    </Image.PreviewGroup>
                                </div>
                            </Col>
                            <Col span={18} style={{ padding: '1em' }}>
                                <div>
                                    <Tag color="red-inverse">{meal.meals.strCategory}</Tag>
                                    <Tag color="green-inverse">{meal.meals.strArea}</Tag>
                                </div>
                                <Typography.Title level={3}>{meal.meals.strMeal}</Typography.Title>
                                <div style={{ margin: '1em 0 1em' }}>
                                    <Typography.Text strong>Ingredients:</Typography.Text>
                                    <br />
                                    {getIngredientsWithMeasure('strIngredient' as keyof Meal)?.map((item, i) => (
                                        <Tag color="blue" key={i} style={{ marginBottom: '0.4em' }}>
                                            {item} - {getIngredientsWithMeasure('strMeasure' as keyof Meal)?.[i]}
                                        </Tag>
                                    ))}
                                </div>
                                <Button type="primary">Checkout</Button>
                            </Col>
                        </Row>
                        <div>
                            <Typography.Title level={5}>Instructions:</Typography.Title>
                            <Typography.Text>{meal.meals.strInstructions}</Typography.Text>
                        </div>
                    </Card>
                )
            )}
            {meal.error && <p>Meal not found!</p>}
        </div>
    );
};
