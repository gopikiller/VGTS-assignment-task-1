import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MealService } from '../../api/MealService';
import { Meal } from '../../types/MealTypes';

type InitialState = {
    loading: boolean;
    meals: Meal[];
    error: string;
};

const initialState: InitialState = {
    loading: false,
    meals: [],
    error: '',
};

export const listAllMeals = createAsyncThunk('meal/listAllMeals', async () => {
    return await MealService.listAllMeals();
});

const mealsSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(listAllMeals.pending, state => {
            state.loading = true;
        });
        builder.addCase(listAllMeals.fulfilled, (state, action: PayloadAction<Meal[]>) => {
            state.loading = false;
            state.meals = action.payload;
            state.error = '';
        });
        builder.addCase(listAllMeals.rejected, (state, action) => {
            state.loading = false;
            state.meals = [];
            state.error = action.error.message || 'Something went wrong!';
        });
    },
});

export default mealsSlice.reducer;
