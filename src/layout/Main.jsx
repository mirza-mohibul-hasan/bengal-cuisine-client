/* eslint-disable no-unused-vars */
import React from 'react';
import Navigationbar from '../pages/NavigationBar/Navigationbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;