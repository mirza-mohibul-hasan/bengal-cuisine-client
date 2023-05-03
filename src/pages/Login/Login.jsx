/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const {handleGoogleSignIn, handleGithubSignIn} = useContext(AuthContext);
    const googleSignin = () =>{
        handleGoogleSignIn()
        .then(result => {
            const logedUser = result.user;
            // console.log(logedUser)
        })
        .catch(error => {
            console.log(error)
        })
    }
    const githubSignin = () =>{
        handleGithubSignIn()
        .then(result => {
            const logedUser = result.user;
            // console.log(logedUser)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='flex justify-center items-center' style={{}}>
            <div className='p-5 m-5 w-1/5' style={{ border: '2px solid rgb(255, 255, 153)' }}>
                <h2 className='text-2xl font-bold text-center text-gray-700'>Sign In With</h2>
                <div>
                    <button onClick={googleSignin} className='border p-2 rounded bg-amber-600 hover:bg-gray-400'>Google</button>
                    <button onClick={githubSignin} className='border p-2 rounded bg-amber-600 hover:bg-gray-400'>Github</button>
                </div>
                <h4 className='text-xl font-bold text-center text-gray-600'>Or</h4>
                <form className='flex flex-col gap-3'>
                    <input type="email" name="email" id="email" required placeholder='Email address' className='bg-gray-100 px-5 py-2 rounded'/>

                    <input type="password" name="password" id="password" required placeholder='Your password' className='bg-gray-100 px-5 py-2 rounded'/>

                    <input type="submit" value="Sign In" className='bg-amber-500 text-white font-semibold rounded'/>
                </form>
                <h4>Not have an account? <Link to='/register' className='text-amber-600'>Register</Link></h4>
            </div>
        </div>
    );
};

export default Login;