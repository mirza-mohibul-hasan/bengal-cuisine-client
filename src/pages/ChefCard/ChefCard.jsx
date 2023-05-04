/* eslint-disable no-unused-vars */
import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const ChefCard = (chef) => {
    // console.log(chef.chef)
    const { id, chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience } = chef.chef;
    // console.log(chefName)
    return (
        <div className="card card-side bg-base-100 shadow-xl  p-3 flex flex-col md:flex-row" style={{ border: '2px solid rgb(255, 255, 153)' }}>
            <LazyLoadImage effect='blur' className='h-56 w-64 md:w-52 rounded' src={chefPicture} alt="Chef" />
            <div className="card-body">
                <h2 className="card-title text-amber-600 text-2xl">{chefName}</h2>
                <p><b>Exprience:</b> {yearsOfExperience} Years</p>
                <p><b>Total Recipes:</b> {numberOfRecipes}</p>
                <p className='flex items-center gap-1'><><b>Likeds:</b> {likes}</> <AiFillLike></AiFillLike></p>
                <div className="card-actions justify-end mt-4">
                    <Link to={`/chef/${id}`}><button className="btn bg-amber-500 border-none">View Recipie</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;