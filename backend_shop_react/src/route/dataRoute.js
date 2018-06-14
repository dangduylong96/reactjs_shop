import React from 'react';

import Layout from '../page/admin/layout';
import DashboardContent from '../components/dashboard/dashboardContent'; 
import AddProduct from '../components/product/addProduct'; 
//Category
import ListCategory from '../components/category/listCategory'; 
import AddCategory from '../components/category/addCategory'; 
import EditCategory from '../components/category/editCategory'; 
//Not Found
import Error404 from '../components/errors/error404';

const dataRoute=[
    {
        path: '/dashboard',
        exact: false,
        main:()=> <Layout content={DashboardContent}/>
    },
    {
        path: '/category',
        exact: true,
        main:({location})=> <Layout content={ListCategory} location={location}/>
    },
    {
        path: '/addCategory',
        exact: true,
        main:({location})=> <Layout content={AddCategory} location={location}/>
    },
    {
        path: '/editCategory/:id',
        exact: true,
        main:({location, match})=> <Layout content={EditCategory} location={location} match={match}/>
    },
    {
        path: '/addProduct',
        exact: true,
        main:()=> <Layout content={AddProduct}/>
    },
    {
        main:()=> <Layout content={Error404}/>
    }
];
export default dataRoute;