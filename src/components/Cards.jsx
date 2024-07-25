import React from 'react';
import defaultImage from '../../public/Banner.png'; // Path to your default image

function Cards({ image, name, price }) {
    const handleError = (e) => {
        e.target.src = defaultImage; // Set default image on error
    };

    return (
        <div className='mt-4 my-3 p-3 mx-8'>
            <div className="card bg-base-100 w-72 h-80 shadow-xl cursor-pointer hover:scale-105 duration-150 dark:bg-slate-900 dark:text-white dark:border flex flex-col">
                <figure className="flex-shrink-0">
                    <img
                        src={image || defaultImage} // Fallback to default image
                        alt={name || 'Book Cover'}
                        className="w-full h-48 " // Ensures image fits correctly
                        onError={handleError} // Handle image load errors
                    />
                </figure>
                <div className="card-body flex flex-col flex-grow p-4">
                    <h2 className="card-title text-lg font-semibold">
                        {name || 'Title'}
                        
                    </h2>
                    <div className="card-actions mt-auto flex justify-between">
                        <div className="badge badge-outline">${price}</div>
                        <div className="badge badge-outline px-2 py-1 cursor-pointer hover:bg-pink-600 duration-300 hover:text-white">
                            Buy Now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
