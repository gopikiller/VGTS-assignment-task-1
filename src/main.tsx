import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import AppLayout from './components/AppLayout/AppLayout';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { MealDetails } from './screens/MealDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '',
                element: <App />,
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
