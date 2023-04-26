import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type MealCardProps = {
    id: number;
    title: string;
    thumb: string;
    area: string;
    category: string;
};

export const MealCard: React.FC<MealCardProps> = ({ id, title, thumb, category, area }) => {
    const navigate = useNavigate();
    const goToMealPage = (id: number) => {
        navigate(`/meal/${id}`);
    };
    return (
        <Card hoverable onClick={() => goToMealPage(id)} cover={<img alt="example" src={thumb} />}>
            <Meta title={title} />
            <p>
                {category} • {area}
            </p>
        </Card>
    );
};
