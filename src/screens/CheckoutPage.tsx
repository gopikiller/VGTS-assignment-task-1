import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Meal } from '../types/MealTypes';
import { Button, Form, Input } from 'antd';
import { useAppDispatch } from '../store/hooks';
import { saveCheckoutInfo } from '../store/slices/checkoutSlice';

export const CheckoutPage: React.FC = () => {
    const state: Meal = useLocation()['state'];
    const navigate = useNavigate();
    console.log(state.strMeal);
    useEffect(() => {
        if (state === null) {
            navigate('/');
        }
    }, [navigate, state]);

    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14 },
        },
    };

    const dispatch = useAppDispatch();
    return (
        <div>
            <h2>Checkout</h2>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={e => {
                    dispatch(saveCheckoutInfo({ shipping: { ...e }, item: { ...state } }));
                    navigate('/success');
                }}
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[
                        {
                            type: 'string',
                            message: 'The input is not valid string',
                        },
                        {
                            required: true,
                            message: 'Please input your first name',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[
                        {
                            type: 'string',
                            message: 'The input is not valid string',
                        },
                        {
                            required: true,
                            message: 'Please input your last name',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="address"
                    label="Address"
                    rules={[
                        {
                            type: 'string',
                            message: 'The input is not valid string',
                        },
                        {
                            required: true,
                            message: 'Please input your address',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="postalCode"
                    label="Postal Code"
                    rules={[
                        {
                            type: 'string',
                            message: 'The input is not valid number',
                        },
                        {
                            required: true,
                            message: 'Please input your postal code',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="city"
                    label="City"
                    rules={[
                        {
                            type: 'string',
                            message: 'The input is not valid string',
                        },
                        {
                            required: true,
                            message: 'Please input your City',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="country"
                    label="Country"
                    rules={[
                        {
                            type: 'string',
                            message: 'The input is not valid string',
                        },
                        {
                            required: true,
                            message: 'Please input your Country',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Purchase
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
