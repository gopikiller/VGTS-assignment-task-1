import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { MealDetails } from './screens/MealDetails';
import Home from './screens/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'meal/:mealId',
                element: <MealDetails />,
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
