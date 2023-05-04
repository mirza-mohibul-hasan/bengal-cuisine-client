/* eslint-disable no-unused-vars */
import React from 'react';
import Navigationbar from '../pages/NavigationBar/Navigationbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import { RiseLoader } from 'react-spinners';
const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navigationbar></Navigationbar>
            {<div>
                {
                    navigation.state === 'loading' && <RiseLoader color="rgb(217 119 6)" className='text-center my-24'/>
                }
            </div>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;