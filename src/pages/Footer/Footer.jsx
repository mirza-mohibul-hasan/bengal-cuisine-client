/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='my-4 mx-3 md:mx-56 bg-amber-100 rounded p-4 md:px-20 md:py-10' >
            {/* Footer nav */}
            <div className='flex justify-around items-center flex-col md:flex-row'>
                <h4 className='text-3xl text-gray-600 font-bold'>Bengal Cusine</h4>
                <Link className='text-cl font-semibold text-gray-500'>About Us</Link>
                <Link className='text-cl font-semibold text-gray-500'>Awards</Link>
                <Link className='text-cl font-semibold text-gray-500'>Contact</Link>
            </div>
            {/* Our Details */}
            <div className='md:flex gap-5 my-2 md:mt-5'>
                <div className='text-center text-gray-600'>
                    <p>Bengal cuisine is a culinary style that originates from the Bengal region of the Indian subcontinent, which encompasses the present-day, West Bengal and the country of Bangladesh. The cuisine is characterized by its use of aromatic spices, herbs, and vegetables, as well as a strong emphasis on fish and rice.</p>
                </div>
                {/* Subscribe and Social */}
                <div className='mt-5'>
                    <div className="flex">
                        <input type="text" placeholder="Your Email" className="px-5 py-2 rounded" />
                        <button className="bg-amber-400 text-white p-2 rounded">Subscribe</button>
                    </div>
                    <div className='flex text-4xl gap-5 mt-5 text-amber-600 justify-center'>
                        <FaFacebook></FaFacebook>
                        <FaLinkedin></FaLinkedin>
                        <FaInstagram></FaInstagram>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <h2 className='text-center'><i>All rights reserved.<br />Powered by <u>Mirza Mohibul Hasan</u></i></h2>
        </div>
    );
};

export default Footer;