/* eslint-disable no-unused-vars */
import React from 'react';

const ChefCard = (chef) => {
    console.log(chef.chef)
    const { id, chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience } = chef.chef;
    // console.log(chefName)
    return (
        <div className="card card-side bg-base-100 shadow-xl m-5 p-3" style={{border:'2px solid rgb(255, 255, 153)'}}>
            <figure ><img className='h-56 w-48 rounded' src={chefPicture} alt="Chef" /></figure>
            <div className="card-body">
                <h2 className="card-title">{chefName}</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-amber-500 border-none">View Recipie</button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;