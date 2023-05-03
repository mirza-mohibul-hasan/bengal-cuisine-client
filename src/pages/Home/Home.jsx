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
                <div className='md:w-[60%]'>
                    <h1 className='text-5xl font-bold my-3'>One Step <br />Closer To Your <br /><span className='text-amber-500'>Daily Cooking</span></h1>
                    <p className='text-xl'>In many cases, favourite recipes can be modified so they have a lower fat content. Choose to steam, bake, grill, braise, boil or microwave your foods, rather than deep fry them. Use non-stick cookware. Microwave or steam your vegetables instead of boiling them to retain the nutrients.</p>
                </div>
                <div className='md:w-[40%] md:ml-3'>
                    <img className='rounded-2xl' src='https://www.denbypottery.com/file/v8807526844468382865/general/LIC-Headers-mobile-Food.jpg' alt="" />
                </div>
            </div>
            <div className='mt-4 mx-3 md:mx-56 grid grid-cols-1 md:grid-cols-2'>
                {
                    chefs.map(chef => <ChefCard key={chef.id} chef = {chef}></ChefCard>)
                }
            </div>
        </>
    );
};

export default Home;