import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getMealDetails } from '../store/slices/mealDetailsSlice';

export const MealDetails: React.FC = () => {
    const params = useParams();

    const meal = useAppSelector(state => state.mealDetail);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (params.mealId) {
            dispatch(getMealDetails(Number(params.mealId)));
        }
    }, [dispatch, params.mealId]);
    return (
        <div>
            {meal.loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p>{meal.meals?.strMeal}</p>
                </>
            )}
            {meal.error && <p>Meal not found!</p>}
        </div>
    );
};
