import React from 'react';

const Meal = ({ meal }) => {
    const { strMealThumb, strMeal, strArea } = meal;
    return (
        <div className='rounded-md border-2 p-2'>
            <div>
                <img className='rounded-md mb-4' src={strMealThumb} alt=''></img>
                <h4>{strMeal}</h4>
                <p>{strArea}</p>
            </div>
        </div>
    );
};

export default Meal;