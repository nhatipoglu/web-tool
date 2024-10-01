import React from 'react';
import ReportList from './ReportList';

const SavedReports = () => {
    const reports = [
        { id: 1, name: 'Rapor 1', date: '2024-01-01' },
        { id: 2, name: 'Rapor 2', date: '2024-02-01' },
    ];

    return (
        <div>
            <h2>Kayıtlı Raporlar</h2>
            <ReportList reports={reports} />
        </div>
    );
};

export default SavedReports;
