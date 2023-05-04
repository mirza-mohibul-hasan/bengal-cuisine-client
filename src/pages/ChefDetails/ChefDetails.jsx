/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import { AiFillLike } from "react-icons/ai";
import LazyLoad from 'react-lazy-load';
const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { id, chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience, shortBio, recipes } = chefDetails[0];
    // console.log(chefPicture);
    // console.log(recipes);
    return (
        <>
            <div className='mt-4 mx-3 md:mx-56 p-5' style={{ borderTop: '2px solid yellow' }}>
                <div className="card bg-base-100 shadow-2xl border-t-2">
                    <figure>
                        <LazyLoad offset={300} className=' w-2/4 mt-5'>
                            <img className='rounded-3xl mt-5' src={chefPicture} alt="Chef" />
                        </LazyLoad>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold my-1 text-amber-500">{chefName}</h2>
                        <p><b>Biography:</b> {shortBio}</p>
                        <p><b>Exprience:</b> {yearsOfExperience} Years</p>
                        <p><b>Total Recipes:</b> {numberOfRecipes}</p>
                        <p className='flex items-center gap-1'><><b>Liked by:</b> {likes}</> <AiFillLike></AiFillLike></p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-5xl font-bold my-3 text-center'>Recipes of {chefName}</h1>
                {
                    recipes.map(recipe => <RecipeDetails recipe={recipe} key={recipe.recipeId}></RecipeDetails>)
                }
            </div>
        </>
    );
};

export default ChefDetails;