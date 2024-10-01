import React from 'react';
import Sidebar from '../components/Sidebar';
import styles from './MainLayout.module.css';  // CSS Modules

const MainLayout = ({ children }) => {
    return (
        <div className={styles.mainLayout}>
            <Sidebar />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
