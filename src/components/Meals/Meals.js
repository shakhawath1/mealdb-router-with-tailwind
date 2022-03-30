import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText]);

    const searchFood = (e) => {
        setSearchText(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            <h4>Search yuour favourite foods...</h4>
            <input className="shadow appearance-none border w-2/5 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text"></input>
            <input className='outline' onChange={searchFood} type='text' id='' />
            {/* <button onClick={searchMeal}>Search</button> */}
            <div className='grid grid-cols-3 gap-10 m-20'>
                {
                    meals.map(meal => <Meal meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;