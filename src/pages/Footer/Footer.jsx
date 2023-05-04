/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='my-4 mx-3 md:mx-56 bg-amber-100 rounded p-4 md:p-20 md:flex justify-around items-center gap-5' >
            <div className='text-center'>
                <h4>Bengal Dine</h4>
                <p>Bengal cuisine is a culinary style that originates from the Bengal region of the Indian subcontinent, which encompasses the present-day Indian state of West Bengal and the country of Bangladesh. The cuisine is characterized by its use of aromatic spices, herbs, and vegetables, as well as a strong emphasis on fish and rice.</p>
            </div>
            <div>
                <div className="flex">
                    <input type="text" placeholder="username@site.com" className="px-5 py-2 rounded" />
                    <button className="bg-amber-400 text-white p-2 rounded">Subscribe</button>
                </div>
                <div className='flex text-4xl gap-5 mt-5 text-amber-600 justify-center'>
                    <FaFacebook></FaFacebook>
                    <FaLinkedin></FaLinkedin>
                    <FaInstagram></FaInstagram>
                </div>
            </div>


        </div>
    );
};

export default Footer;