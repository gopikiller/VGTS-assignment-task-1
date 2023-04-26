import React, { useState } from 'react';
import { Card, Col, Row, Image, Typography, Tag, Button } from 'antd';
import { Meal } from '../../types/MealTypes';

type MealDetailProps = {
    ingredients?: string[];
    measures?: string[];
};

export const MealDetails: React.FC<Meal & MealDetailProps> = ({ strArea, strCategory, strMeal, strMealThumb, strInstructions, ingredients, measures }) => {
    const [visible, setVisible] = useState(false);
    return (
        <Card title={strMeal} bordered={false}>
            <Row>
                <Col span={6}>
                    <Image preview={{ visible: false }} src={strMealThumb} onClick={() => setVisible(true)} />
                    <div style={{ display: 'none' }}>
                        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                            <Image src={strMealThumb} />
                        </Image.PreviewGroup>
                    </div>
                </Col>
                <Col span={18} style={{ padding: '1em' }}>
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
                    <Button type="primary">Checkout</Button>
                </Col>
            </Row>
            <div>
                <Typography.Title level={5}>Instructions:</Typography.Title>
                <Typography.Text>{strInstructions}</Typography.Text>
            </div>
        </Card>
    );
};
