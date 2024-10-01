import React from 'react';
import './Dashboard.css'; // Dashboard stil dosyası

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div className="dashboard-widgets">
                <div className="widget">
                    <h2>Toplam Raporlar</h2>
                    <p>120</p>
                </div>
                <div className="widget">
                    <h2>Aylık Raporlar</h2>
                    <p>30</p>
                </div>
                <div className="widget">
                    <h2>Bekleyen Raporlar</h2>
                    <p>5</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
// Bu dosyayı oluşturduktan sonra, src/App.js dosyasını güncelleyerek Dashboard bileşenini ana sayfada gösterin: