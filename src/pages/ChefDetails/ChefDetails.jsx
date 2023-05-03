/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import { AiFillLike } from "react-icons/ai";
const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { id, chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience, shortBio, recipes } = chefDetails[0];
    // console.log(chefPicture);
    // console.log(recipes);
    return (
        <>
            <div className='mt-4 mx-3 md:mx-56 p-5' style={{ borderTop: '2px solid yellow' }}>
                {/* <div>
                    <h1 className='text-xl font-bold my-3 text-amber-500'>{chefName}</h1>
                    <p><b>Biography:</b> {shortBio}</p>
                    <p><b>Exprience:</b> {yearsOfExperience}</p>
                    <p><b>Total Recipes:</b> {numberOfRecipes}</p>
                    <p><b>Likes:</b> {likes}</p>
                    
                </div>
                <div>
                    <img className='rounded-2xl' src={chefPicture} alt="" />
                </div> */}
                <div className="card bg-base-100 shadow-2xl border-t-2">
                    <figure>
                        <img className='w-2/5 rounded-3xl mt-5' src={chefPicture} alt="Chef" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-bold my-1 text-amber-500">{chefName}</h2>
                        <p><b>Biography:</b> {shortBio}</p>
                        <p><b>Exprience:</b> {yearsOfExperience} Years</p>
                        <p><b>Total Recipes:</b> {numberOfRecipes}</p>
                        <p className='flex items-center gap-1'><><b>Liked by:</b> {likes}</> <AiFillLike></AiFillLike></p>
                    </div>
                </div>
            </div>
            <div>
                {
                    recipes.map(recipe => <RecipeDetails recipe={recipe} key={recipe.recipeId}></RecipeDetails>)
                }
            </div>
        </>
    );
};

export default ChefDetails;