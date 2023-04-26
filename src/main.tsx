import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import { Provider } from 'react-redux';
import { store } from './store/store';
import HomePage from './screens/HomePage';
import { MealPage } from './screens/MealPage';
import { CheckoutPage } from './screens/CheckoutPage';
import { SuccesPage } from './screens/SuccesPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: 'meal/:mealId',
                element: <MealPage />,
            },
            {
                path: 'checkout',
                element: <CheckoutPage />,
            },
            {
                path: 'success',
                element: <SuccesPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
