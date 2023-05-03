/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const {handleGoogleSignIn, handleGithubSignIn, signIn} = useContext(AuthContext);
    const [errormsg, setErrormsg] = useState('');
    const [successmsg, setSuccessmsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const googleSignin = () =>{
        handleGoogleSignIn()
        .then(result => {
            const logedUser = result.user;
            // console.log(logedUser)
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error)
            setErrormsg(error)
        })
    }
    const githubSignin = () =>{
        handleGithubSignIn()
        .then(result => {
            const logedUser = result.user;
            // console.log(logedUser)
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error)
            setErrormsg(error)
        })
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setErrormsg('')
                // console.log(loggedUser);
                navigate(from, { replace: true })
                // navigate('/')
            })
            .catch(error => {
                console.log(error);
                setErrormsg(error.message)
            })
    }
    return (
        <div className='flex justify-center items-center' style={{}}>
            <div className='p-5 m-5 w-1/5 rounded-xl' style={{ border: '2px solid rgb(255, 255, 153)' }}>
            <p className='text-center text-red-700 text-xl font-semibold'>{errormsg}</p>
                <h2 className='text-2xl font-bold text-center text-gray-700 my-3'>Sign In With</h2>
                <div className='flex justify-around mt-2'>
                    <button onClick={googleSignin} className='border p-2 rounded bg-amber-600 hover:bg-gray-400'>Google</button>
                    <button onClick={githubSignin} className='border p-2 rounded bg-amber-600 hover:bg-gray-400'>Github</button>
                </div>
                <h4 className='text-xl font-bold text-center text-gray-600 my-3'>Or Using</h4>
                <form onSubmit={handleLogin} className='flex flex-col gap-3'>
                    <input type="email" name="email" id="email" required placeholder='Email address' className='bg-gray-100 px-5 py-2 rounded'/>

                    <input type="password" name="password" id="password" required placeholder='Your password' className='bg-gray-100 px-5 py-2 rounded'/>

                    <input type="submit" value="Sign In" className='bg-amber-500 text-white font-semibold rounded'/>
                </form>
                <h4 className='my-3'>Not have an account? <Link to='/register' className='text-amber-600'>Register</Link></h4>
            </div>
        </div>
    );
};

export default Login;