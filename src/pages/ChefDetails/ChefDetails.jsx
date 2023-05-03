/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { id, chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience, shortBio, recipe} = chefDetails[0];
    // console.log(chefPicture);
    // console.log(recipe);
    return (
        <>
            <div className='mt-4 mx-3 md:mx-56 gap-5 md:flex items-center p-5' style={{ borderTop: '2px solid yellow' }}>
                <div>
                    <h1 className='text-xl font-bold my-3 text-amber-500'>{chefName}</h1>
                    <p><b>Biography:</b> {shortBio}</p>
                    <p><b>Exprience:</b> {yearsOfExperience}</p>
                    <p><b>Total Recipes:</b> {numberOfRecipes}</p>
                    <p><b>Likes:</b> {likes}</p>
                    
                </div>
                <div>
                    <img className='rounded-2xl' src={chefPicture} alt="" />
                </div>
            </div>
            <div>
                {
                    // recipe.map()
                }
            </div>
        </>
    );
};

export default ChefDetails;