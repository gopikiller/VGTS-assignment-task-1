import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Meal } from '../../types/MealTypes';

export type CheckoutState = {
    item?: Meal;
    shipping: {
        firstName: string;
        lastName: string;
        email: string;
        address: string;
        postalCode: string;
        city: string;
        country: string;
    };
    status?: 'PENDING' | 'SUCCESS';
};

const initialState: CheckoutState = {
    item: undefined,
    shipping: {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        postalCode: '',
        city: '',
        country: '',
    },
    status: undefined,
};

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        saveCheckoutInfo: (state, action: PayloadAction<CheckoutState>) => {
            state.shipping = action.payload.shipping;
            state.item = action.payload.item;
            state.status = 'SUCCESS';
        },
    },
});

export default checkoutSlice.reducer;

export const { saveCheckoutInfo } = checkoutSlice.actions;
