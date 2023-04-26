import React, { useEffect } from 'react';
import { useAppSelector } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import { Card, Descriptions } from 'antd';
import { OrderItem } from '../components/OrderItem/OrderItem';

export const SuccesPage: React.FC = () => {
    const checkout = useAppSelector(state => state.checkout);
    const navigate = useNavigate();

    const { shipping, item, status } = checkout;

    useEffect(() => {
        if (status !== 'SUCCESS') {
            navigate('/');
        }
    }, [navigate, status]);
    return (
        <div>
            <Card title="Order Info" style={{ marginBottom: '1em' }}>
                {item && <OrderItem {...item} status={status} />}
            </Card>
            <Card>
                <Descriptions title="Shipping Info">
                    <Descriptions.Item label="User Name">
                        {shipping.firstName} {shipping.lastName}
                    </Descriptions.Item>
                    <Descriptions.Item label="E-Mail">{shipping.email}</Descriptions.Item>
                    <Descriptions.Item label="Address">{shipping.address}</Descriptions.Item>
                    <Descriptions.Item label="Country & State">
                        {shipping.country}, {shipping.city}
                    </Descriptions.Item>
                    <Descriptions.Item label="Postal Code">{shipping.postalCode}</Descriptions.Item>
                </Descriptions>
            </Card>
        </div>
    );
};
