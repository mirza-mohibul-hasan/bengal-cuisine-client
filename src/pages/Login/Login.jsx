/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const { handleGoogleSignIn, handleGithubSignIn, signIn, successToast} = useContext(AuthContext);
    const [errormsg, setErrormsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const googleSignin = () => {
        handleGoogleSignIn()
            .then(result => {
                successToast('Login Successfull')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setErrormsg(error.message)
            })
    }
    const githubSignin = () => {
        handleGithubSignIn()
            .then(result => {
                successToast('Login Successfull')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setErrormsg(error.message)
            })
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                setErrormsg('')
                successToast('Login Successfull')
                navigate(from, { replace: true })
            })
            .catch(error => {
                if((error.message).includes('wrong-password')){
                    setErrormsg('Wrong Password')
                }
                else if((error.message).includes('user-not-found')){
                    setErrormsg("You don't have an account")
                }
                else if((error.message).includes('too-many-requests')){
                    setErrormsg("Account blocked, try later")
                }
                else{
                    setErrormsg(error.message)
                }
            })
    }
    return (
        <div className='flex justify-center items-center' style={{}}>
            <ToastContainer></ToastContainer>
            <div className='p-5 m-5 md:w-1/5 rounded-xl' style={{ border: '2px solid rgb(255, 255, 153)' }}>
                {
                    (errormsg.length>2)&&<p style={{border:'1px solid red'}} className='text-center text-red-500 text-sm my-1 font-semibold rounded-md'>{errormsg}</p>
                }
                <h2 className='text-2xl font-bold text-center text-gray-700 mb-3 mt-2'>LOGIN HERE</h2>
                <div className='flex justify-around mt-2'>
                    <button onClick={googleSignin} className='border p-2 rounded  hover:bg-gray-100 flex items-center gap-2' style={{ border: '1px solid yellow' }}><FaGoogle className='text-amber-500'></FaGoogle><span className='font-semibold text-gray-600'>Google</span></button>
                    <button onClick={githubSignin} className='border p-2 rounded hover:bg-gray-100 flex items-center gap-2' style={{ border: '1px solid yellow' }}><FaGithub className='text-amber-500'></FaGithub><span className='font-semibold text-gray-600'>Github</span></button>
                </div>
                <h4 className='text-xl font-bold text-center text-gray-600 my-3'>Or</h4>
                <form onSubmit={handleLogin} className='flex flex-col gap-3'>
                    <input type="email" name="email" id="email" required placeholder='Email address' className='bg-gray-100 px-5 py-2 rounded' />

                    <input type="password" name="password" id="password" required placeholder='Your password' className='bg-gray-100 px-5 py-2 rounded' />

                    <input type="submit" value="Login" className='bg-amber-500 text-white font-semibold rounded' />
                </form>
                <h4 className='my-3 text-sm text-gray-500'>Not have an account? <Link to='/register' className='text-amber-600'>Register</Link></h4>
            </div>
        </div>
    );
};

export default Login;