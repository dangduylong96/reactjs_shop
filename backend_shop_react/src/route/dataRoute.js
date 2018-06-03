import React from 'react';

import Login from '../page/login';
import Dashboard from '../page/admin/dashboard';

const dataRoute=[
    {
        path: '/',
        exact: true,
        main:()=> <Login />
    },
    {
        path: '/dashboard',
        exact: false,
        main:()=> <Dashboard />
    },
];
export default dataRoute;