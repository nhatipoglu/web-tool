import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ReportsPage from '../pages/ReportsPage';
import Dashboard from '../features/Dashboard/Dashboard';
import MainLayout from '../layouts/MainLayout';

const AppRoutes = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/reports" element={<ReportsPage />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRoutes;
