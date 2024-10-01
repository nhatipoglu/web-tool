import React from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.module.css'; // Bu dosyada stil vereceğiz

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h3>Dashboard</h3>
            </div>
            <ul className="sidebar-menu">
                <li><Link to="/">Ana Sayfa</Link></li>
                <li><Link to="/reports">Kayıtlı Raporlar</Link></li>
                <li><Link to="/analytics">Analytics</Link></li>
                <li><Link to="/settings">Ayarlar</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
