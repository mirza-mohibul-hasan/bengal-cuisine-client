/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

const Home = () => {
    const chefs = useLoaderData();
    // console.log(chefs);
    return (
        <>
            <div className='mt-4 mx-3 md:mx-56 md:flex items-center p-5' style={{ borderTop: '2px solid yellow' }}>
                <div>
                    <h1 className='text-5xl font-bold my-3'>One Step <br />Closer To Your <br /><span className='text-amber-500'>Daily Cooking</span></h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, excepturi repellendus temporibus ea assumenda magnam fuga corporis quod cumque porro?</p>
                </div>
                <div>
                    <img className='rounded-2xl' src='https://www.denbypottery.com/file/v8807526844468382865/general/LIC-Headers-mobile-Food.jpg' alt="" />
                </div>
            </div>
            <div>
                {
                    chefs.map(chef => <ChefCard key={chef.id} chef = {chef}></ChefCard>)
                }
            </div>
        </>
    );
};

export default Home;