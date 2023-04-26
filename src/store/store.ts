import { configureStore } from '@reduxjs/toolkit';
import mealsSlice from './slices/mealsSlice';
import mealDetailsSlice from './slices/mealDetailsSlice';

export const store = configureStore({
    reducer: {
        meals: mealsSlice,
        mealDetail: mealDetailsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
