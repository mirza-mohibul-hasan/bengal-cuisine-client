/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const { createUser, updateUserData, logOut, successToast } = useContext(AuthContext);
    const [errormsg, setErrormsg] = useState('');

    //Email Password Register
    const handleRegister = (event) => {
        event.preventDefault();
        setErrormsg('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        //Password Length Check
        if (password.length < 6) {
            setErrormsg('Password should be more than six characters')
            return;
        }
        // Register With Emaill pass function
        createUser(email, password)
            .then(userCredential => {
                successToast('Registration Successfull');
                event.target.reset();
                updateUserData(userCredential.user, name, photo)
                logOut(false)
                navigate('/login')
            })
            .catch(error => {
                if((error.message).includes('email-already-in-use')){
                    setErrormsg("Already Registered")
                }
                else{
                    setErrormsg(error.message)
                }
            })
    }
    return (
        // Register page
        <div className='flex justify-center items-center' style={{}}>
            <div className='p-5 m-5 md:w-1/5 rounded' style={{ border: '2px solid rgb(255, 255, 153)' }}>
                {
                    (errormsg.length > 2) && <p style={{ border: '1px solid red' }} className='text-center text-red-500 text-sm my-1 font-semibold rounded-md'>{errormsg}</p>
                }
                <h2 className='text-2xl font-bold text-center text-gray-700 mb-5'>Sign Up With</h2>
                <form onSubmit={handleRegister} className='flex flex-col gap-3'>
                    <input type="email" name="email" id="email" required placeholder='Your Email Address' className='bg-gray-100 px-5 py-2 rounded' />

                    <input type="password" name="password" id="password" required placeholder='Your Password' className='bg-gray-100 px-5 py-2 rounded' />

                    <input type="text" name="name" id="name" placeholder='Your Name' className='bg-gray-100 px-5 py-2 rounded' />

                    <input type="text" name="photo" id="photourl" placeholder='Your Photo URL' className='bg-gray-100 px-5 py-2 rounded' />

                    <input type="submit" value="Sign Up" className='bg-amber-500 text-white font-semibold rounded' />
                </form>
                <h4 className='my-3 text-sm text-gray-500'>Already have an account? <Link to='/login' className='text-amber-600'>Log in</Link></h4>
            </div>
        </div>
    );
};

export default Register;