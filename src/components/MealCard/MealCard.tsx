import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { Link } from 'react-router-dom';

type MealCardProps = {
    id: number;
    title: string;
    thumb: string;
    area: string;
    category: string;
};

export const MealCard: React.FC<MealCardProps> = ({ id, title, thumb, category, area }) => {
    return (
        <Link to={`/meal/${id}`}>
            <Card hoverable cover={<img alt="example" src={thumb} />}>
                <Meta title={title} />
                <p>
                    {category} • {area}
                </p>
            </Card>
        </Link>
    );
};
