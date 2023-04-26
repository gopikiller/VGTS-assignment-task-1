import React from 'react';
import { Card, Col, Row, Image, Typography, Tag, Button } from 'antd';
import { Meal } from '../../types/MealTypes';
import { useNavigate } from 'react-router-dom';
import './MealDetails.scss';

type MealDetailProps = {
    ingredients?: string[];
    measures?: string[];
};

export const MealDetails: React.FC<Meal & MealDetailProps> = ({ strArea, strCategory, strMeal, strMealThumb, strInstructions, ingredients, measures }) => {
    const navigate = useNavigate();
    return (
        <Card title={strMeal} bordered={false}>
            <Row>
                <Col xl={6} sm={24}>
                    <Image src={strMealThumb} />
                </Col>
                <Col xl={18} sm={24} className="meal-detail-body">
                    <div>
                        <Tag color="red-inverse">{strCategory}</Tag>
                        <Tag color="green-inverse">{strArea}</Tag>
                    </div>
                    <Typography.Title level={3}>{strMeal}</Typography.Title>
                    <div style={{ margin: '1em 0 1em' }}>
                        <Typography.Text strong>Ingredients:</Typography.Text>
                        <br />
                        {ingredients?.map((item, i) => (
                            <Tag color="blue" key={i} style={{ marginBottom: '0.4em' }}>
                                {item} - {measures?.[i]}
                            </Tag>
                        ))}
                    </div>
                    <Button type="primary" onClick={() => navigate('/checkout', { state: { strArea, strCategory, strMeal, strMealThumb, strInstructions, ingredients, measures } })}>
                        Checkout
                    </Button>
                </Col>
            </Row>
            <div>
                <Typography.Title level={5}>Instructions:</Typography.Title>
                <Typography.Text>{strInstructions}</Typography.Text>
            </div>
        </Card>
    );
};
