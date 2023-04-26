import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getMealDetails } from '../store/slices/mealDetailsSlice';
import { Spin } from 'antd';
import { Meal } from '../types/MealTypes';
import { MealDetails } from '../components/MealDetails/MealDetails';

export const MealPage: React.FC = () => {
    const params = useParams();

    const meal = useAppSelector(state => state.mealDetail);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (params.mealId) {
            dispatch(getMealDetails(Number(params.mealId)));
        }
    }, [dispatch, params.mealId]);

    const getIngredientsWithMeasure = useCallback(
        (key: keyof Meal) => {
            const ingredients: string[] = [];
            for (let index = 1; index <= 10; index++) {
                if (!meal.meals) return;
                const element = meal.meals[`${key}${index}` as keyof Meal];
                if (element.length !== 0) {
                    ingredients.push(element);
                }
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
                meal.meals && <MealDetails {...meal.meals} ingredients={getIngredientsWithMeasure('strIngredient' as keyof Meal)} measures={getIngredientsWithMeasure('strMeasure' as keyof Meal)} />
            )}
            {meal.error && <p>Meal not found!</p>}
        </div>
    );
};
