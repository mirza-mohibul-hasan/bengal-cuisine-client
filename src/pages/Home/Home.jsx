/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import Marquee from "react-fast-marquee";
const Home = () => {
    const chefs = useLoaderData();
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
            {/* Chef card */}
            <div className='mt-4 mx-3 py-5 md:mx-56 grid grid-cols-1 md:grid-cols-2 gap-5' style={{ borderTop: '2px solid yellow' }}>
                {
                    chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>
            {/* Marquie extra section */}
            <div className='mt-4 mx-3 md:mx-56 my-3 py-3' style={{ borderTop: '2px solid yellow' }}>
                <h1 className='text-amber-500 text-2xl text-center font-bold'>Latest Recipe From Chefs</h1>
                <Marquee>
                    <div className='border p-3 rounded m-3 bg-amber-100' style={{ border: '2px solid rgb(255, 255, 153)' }}>
                        <img className='h-36 rounded ' src={chefs[0].recipes[0].recipeImage} alt="" />
                        <h2 className='text-gray-800 text-xl font-semibold text-center'>{chefs[0].recipes[0].recipeName}</h2>
                    </div>
                    <div className='border p-3 rounded m-3 bg-amber-100' style={{ border: '2px solid rgb(255, 255, 153)' }}>
                        <img className='h-36 rounded' src={chefs[1].recipes[1].recipeImage} alt="" />
                        <h2 className='text-gray-800 text-xl font-semibold text-center'>{chefs[1].recipes[1].recipeName}</h2>
                    </div>
                    <div className='border p-3 rounded m-3 bg-amber-100' style={{ border: '2px solid rgb(255, 255, 153)' }}>
                        <img className='h-36 rounded ' src={chefs[2].recipes[2].recipeImage} alt="" />
                        <h2 className='text-gray-800 text-xl font-semibold text-center'>{chefs[2].recipes[2].recipeName}</h2>
                    </div>
                    <div className='border p-3 rounded m-3 bg-amber-100' style={{ border: '2px solid rgb(255, 255, 153)' }}>
                        <img className='h-36 rounded' src={chefs[3].recipes[1].recipeImage} alt="" />
                        <h2 className='text-gray-800 text-xl font-semibold text-center'>{chefs[3].recipes[1].recipeName}</h2>
                    </div>
                </Marquee>
            </div>
            <div className='mt-5 mx-3 md:mx-56 py-5 shadow-2xl rounded' style={{ borderTop: '2px solid yellow' }}>
                <h1 className='text-amber-500 text-2xl text-center font-bold my-2'>Some Coocking Tips</h1>
                <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
                    <div className='md:w-[50%] m-3 md:ms-10'>
                        <h4>1. Read the Entire Recipe</h4>
                        <h4>2. Make Notes While You Cook</h4>
                        <h4>3. Season and Taste-Test While Cooking</h4>
                        <h4>4. Substitute Items When Necessary</h4>
                        <h4>5. Pay Attention to Your Food’s Consistency</h4>
                        <h4>6. Improvise While Cooking But Not Baking</h4>
                        <h4>7. Don’t Be Afraid to Try New Things</h4>
                        <h4>8. Cook What You Know for Guests</h4>
                        <h4>9. Trust Yourself</h4>
                    </div>
                    <img className='md:w-[50%] rounded m-3' src="https://asianinspirations.com.au/wp-content/uploads/2019/07/Chinese-Cooking-Hacks-940x627.jpg" alt="" />
                </div>
            </div>
        </>
    );
};

export default Home;