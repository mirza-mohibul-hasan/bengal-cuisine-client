/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
const Navigationbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut();
    }
    return (
        <nav className='mt-4 mx-3 md:mx-56 md:flex justify-between items-center text-center'>
            <div>
                <h1 className='text-3xl font-bold'>Easy Cusine</h1>
            </div>
            <div className='font-semibold grid grid-cols-2 md:grid-cols-4'>
                <Link to='/' className='font-bold mx-5 my-2 md:my-0 hover:text-amber-500'>Home</Link>
                <Link to='/blog' className='font-bold mx-5 my-2 md:my-0 hover:text-amber-500'>Blogs</Link>
            </div>
            <div className='flex justify-center'>
                {
                    user && <button data-tooltip-id="my-tooltip" 
                    data-tooltip-content={user?.displayName} 
                    data-tooltip-place="top" className='w-8'>
                        <Tooltip id="my-tooltip" />
                        <img src={user?.photoURL} className='rounded' alt="" />
                    </button>
                }
                {
                    user?<button onClick={handleLogOut} className='bg-amber-500 py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white'>Logout</button>:
                    <Link to='/login'><button className='bg-amber-500 py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white'>Login</button></Link>
                }
            </div>
        </nav>
    );
};

export default Navigationbar;