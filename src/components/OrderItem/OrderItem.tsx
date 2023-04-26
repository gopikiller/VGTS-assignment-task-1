import React from 'react';
import { Meal } from '../../types/MealTypes';
import { Col, Image, Row, Tag, Typography } from 'antd';
import { CheckoutState } from '../../store/slices/checkoutSlice';

type OrderItemProp = {
    status?: CheckoutState['status'];
} & Meal;

export const OrderItem: React.FC<OrderItemProp> = ({ strMeal, strArea, strCategory, strMealThumb, status }) => {
    return (
        <Row>
            <Col xl={6} sm={24}>
                <Image src={strMealThumb} />
            </Col>
            <Col xl={18} sm={24} style={{ padding: '1em' }}>
                <div>
                    <Tag color="red-inverse">{strCategory}</Tag>
                    <Tag color="green-inverse">{strArea}</Tag>
                </div>
                <Typography.Title level={2}>{strMeal}</Typography.Title>
                <div>Order Status: {status === 'SUCCESS' ? <Tag color="#87d068">SUCCESS</Tag> : <Tag color="#f50">FAILED</Tag>}</div>
            </Col>
        </Row>
    );
};
