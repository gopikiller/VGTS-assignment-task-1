import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import './AppLayout.scss';

const AppLayout: React.FC = () => {
    return (
        <Layout className="app-layout">
            <h1>Header</h1>
            <Outlet />
            <h3>Footer</h3>
        </Layout>
    );
};

export default AppLayout;
