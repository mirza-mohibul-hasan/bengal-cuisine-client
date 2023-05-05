/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Navigationbar from '../pages/NavigationBar/Navigationbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import { RiseLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';
const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            {/* For Header */}
            <Navigationbar></Navigationbar>
            <ToastContainer></ToastContainer>
            {/* For Loader Spinner */}
            {<div>
                {
                    navigation.state === 'loading' && <RiseLoader color="rgb(217 119 6)" className='text-center my-24'/>
                }
            </div>}
            {/* For Changeable middle part */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;