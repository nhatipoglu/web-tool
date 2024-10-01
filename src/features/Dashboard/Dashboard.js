import React from 'react';
import styles from './Dashboard.module.css';  // CSS Modules kullanımı

const Dashboard = () => {
    return (
        <div className={styles.dashboardContainer}>
            <h1>Dashboard</h1>
            <div className={styles.dashboardWidgets}>
                <div className={styles.widget}>
                    <h2>Toplam Raporlar</h2>
                    <p>120</p>
                </div>
                <div className={styles.widget}>
                    <h2>Aylık Raporlar</h2>
                    <p>30</p>
                </div>
                <div className={styles.widget}>
                    <h2>Bekleyen Raporlar</h2>
                    <p>5</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
