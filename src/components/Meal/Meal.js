import React from 'react';


const Meal = ({ meal, addToOrder }) => {
    const { strMealThumb, strMeal, strArea } = meal;

    return (
        <div className='rounded-md border-2 p-2'>
            <div>
                <img className='rounded-md mb-4' src={strMealThumb} alt=''></img>
                <div className='flex justify-between border-2 rounded-md p-5'>
                    <div>
                        <h4>{strMeal}</h4>
                        <p>{strArea}</p>
                    </div>
                    <button onClick={() => addToOrder(meal)} className='border-2 rounded-md bg-orange-600 text-white font-bold p-3'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Meal;