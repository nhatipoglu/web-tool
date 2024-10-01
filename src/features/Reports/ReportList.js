import React from 'react';

const ReportList = ({ reports }) => {
    return (
        <ul>
            {reports.map(report => (
                <li key={report.id}>
                    {report.name} - {report.date}
                </li>
            ))}
        </ul>
    );
};

export default ReportList;
