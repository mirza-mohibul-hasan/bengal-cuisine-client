/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
    return (
        <nav className='mt-4 mx-3 md:mx-56 md:flex justify-between items-center text-center'>
            <div>
                <h1 className='text-3xl font-bold'>Easy Cusine</h1>
            </div>
            <div className='font-semibold grid grid-cols-2 md:grid-cols-4'>
                <Link to='/' className='font-bold mx-5 my-2 md:my-0 hover:text-amber-500'>Home</Link>
                <Link to='/blog' className='font-bold mx-5 my-2 md:my-0 hover:text-amber-500'>Blogs</Link>
            </div>
            <div>
                <Link to='/login'><button className='bg-amber-500 py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold mt-5 md:my-0 text-white'>Login</button></Link>
                <button className='bg-amber-500 py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold mt-5 md:my-0 text-white'>Logout</button>
            </div>
        </nav>
    );
};

export default Navigationbar;