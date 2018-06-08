import React from 'react';

import Dashboard from '../page/admin/dashboard';
//Login vào mới đc xài
const dataRoute=[
    {
        path: '/dashboard',
        exact: false,
        main:()=> <Dashboard />
    }
];
export default dataRoute;