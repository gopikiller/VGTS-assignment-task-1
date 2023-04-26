import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MealService } from '../../api/MealService';
import { Meal } from '../../types/MealTypes';

type InitialState = {
    loading: boolean;
    meals?: Meal;
    error: string;
};

const initialState: InitialState = {
    loading: false,
    meals: undefined,
    error: '',
};

export const getMealDetails = createAsyncThunk('meal/mealDetails', async (id: number) => {
    return await MealService.listMealDetailsById(id);
});

const mealDetailsSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMealDetails.pending, state => {
            state.loading = true;
        });
        builder.addCase(getMealDetails.fulfilled, (state, action: PayloadAction<Meal>) => {
            state.loading = false;
            state.meals = action.payload;
            state.error = '';
        });
        builder.addCase(getMealDetails.rejected, (state, action) => {
            state.loading = false;
            state.meals = undefined;
            state.error = action.error.message || 'Something went wrong!';
        });
    },
});

export default mealDetailsSlice.reducer;
