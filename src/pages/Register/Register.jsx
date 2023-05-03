/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { handleGoogleSignIn, handleGithubSignIn, createUser, updateUserData } = useContext(AuthContext);
    const googleSignin = () => {
        handleGoogleSignIn()
            .then(result => {
                const logedUser = result.user;
                // console.log(logedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const githubSignin = () => {
        handleGithubSignIn()
            .then(result => {
                const logedUser = result.user;
                // console.log(logedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }
    //Email Password Register
    const [errormsg, setErrormsg] = useState('');
    const [successmsg, setSuccessmsg] = useState('');
    const handleRegister = (event) => {
        event.preventDefault();
        setErrormsg('')
        // console.log(event.target.email.value)
        // console.log(event.target.password.value)
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        if(password.length <6){
            setErrormsg('Less 6');
            return;
        }

        createUser(email, password)
            .then(userCredential => {
                console.log(userCredential);
                setSuccessmsg('Registration Successfull');
                setErrormsg('')
                event.target.reset();

                //update data
                updateUserData(userCredential.user, name, photo)
            })
            .catch(error => {
                console.error(error.message)
                setSuccessmsg('')
                setErrormsg(error.message)
            })
    }
    return (
        <div className='flex justify-center items-center' style={{}}>
            <div className='p-5 m-5 w-1/5' style={{ border: '2px solid rgb(255, 255, 153)' }}>
                <p className='text-center text-red-700 text-xl font-semibold'>{errormsg}</p>
                <p className='text-center text-green-700 text-xl font-semibold'>{successmsg}</p>
                <h2 className='text-2xl font-bold text-center text-gray-700'>Sign Up With</h2>
                <div>
                    <button onClick={googleSignin} className='border p-2 rounded bg-amber-600 hover:bg-gray-400'>Google</button>
                    <button onClick={githubSignin} className='border p-2 rounded bg-amber-600 hover:bg-gray-400'>Github</button>
                </div>
                <h4 className='text-xl font-bold text-center text-gray-600'>Or</h4>
                <form onSubmit={handleRegister} className='flex flex-col gap-3'>
                    <input type="email" name="email" id="email" required placeholder='Your Email Address' className='bg-gray-100 px-5 py-2 rounded' />

                    <input type="password" name="password" id="password" required placeholder='Your Password' className='bg-gray-100 px-5 py-2 rounded' />

                    <input type="text" name="name" id="name" placeholder='Your Name' className='bg-gray-100 px-5 py-2 rounded' />

                    <input type="text" name="photo" id="photourl" required placeholder='Your Photo URL' className='bg-gray-100 px-5 py-2 rounded' />

                    <input type="submit" value="Sign Up" className='bg-amber-500 text-white font-semibold rounded' />
                </form>
                <h4>Already have an account? <Link to='/login' className='text-amber-600'>Login</Link></h4>
            </div>
        </div>
    );
};

export default Register;