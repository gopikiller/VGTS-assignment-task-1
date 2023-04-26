import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import './AppLayout.scss';

const AppLayout: React.FC = () => {
    return (
        <Layout className="app-layout">
            <h1>VGTS - Vibe Gourmet Takeout Shop</h1>
            <Outlet />
        </Layout>
    );
};

export default AppLayout;
