/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
    return (
        <div className='mt-4 mx-3 md:mx-56 bg-amber-100 rounded p-20 flex justify-around' >
            <div>
                <h4>Company</h4>
                <div>
                    <p>About Us</p>
                    <p>Contact</p>
                </div>
            </div>
            <div>
                <div className="flex">
                    <input type="text" placeholder="username@site.com" className="px-5 py-2 rounded" />
                    <button className="bg-amber-400 text-white p-2 rounded">Subscribe</button>
                </div>
            </div>
            <div>

            </div>
            {/* <footer className="footer p-10 bg-base-200 text-base-content rounded-2xl mx-3">
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="flex">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer> */}
        </div>
    );
};

export default Footer;