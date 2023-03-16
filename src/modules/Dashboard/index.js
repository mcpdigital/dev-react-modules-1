import React from 'react';

const Dashboard = () => (
    <div>This REACT Webapp</div>
);

export default {
    routeProps: {
        path: '/',
        exact: true,
        component: Dashboard,
    },
    name: 'Dashboard',
};

