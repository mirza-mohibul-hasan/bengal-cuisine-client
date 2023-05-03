/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaListUl, FaYoast } from 'react-icons/fa';
const RecipeDetails = ({recipe}) => {
    const {recipeName, recipeImage, rating, method, ingredients} = recipe;
    return (
        <div className='mt-4 mx-3 md:mx-56 gap-5 md:flex items-center p-5 shadow-xl rounded' style={{ borderTop: '2px solid yellow' }}>
                <div className='flex-1'>
                    <h1 className='text-xl font-bold my-3 text-amber-500'>{recipeName}</h1>
                    <p className='flex'><b><FaListUl></FaListUl> Ingredients are:</b></p>
                    {
                        ingredients.map(ing => <p key={ing} className='flex items-center gap-3'><FaYoast></FaYoast> <>{ing}</></p>)
                    }
                    <p><b>Method of cocking:</b> {method}</p>
                    <p><b>Rating:</b> {rating}</p>
                    <button className='bg-amber-500 font-semibold text-white py-1 px-2 rounded-md mt-2 hover:bg-gray-500'>Add to Favourite</button>
                </div>
                <div className='flex-1'>
                    <img className='rounded-2xl' src={recipeImage} alt="" />
                </div>
            </div>
    );
};

export default RecipeDetails;