import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Order from '../Order/Order';

const Meals = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    const [order, setOrder] = useState([]);
    const [mealName, setMealName] = useState('');

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [mealName]);

    const searchFood = (e) => {
        setSearchText(e.target.value)
        console.log(e.target.value)
    }
    const searchMeal = () => {
        setMealName(searchText)
    }

    const addToOrder = (selectedItem) => {
        // console.log(selectedItem)
        let newOrder = [...order, selectedItem];
        setOrder(newOrder);
    }
    const removeOrder = id => {
        const rest = order.filter(meal => meal.idMeal !== id);
        setOrder(rest)
    }

    return (
        <div>
            <h4>Search yuour favourite foods...</h4>

            <input className='outline' onBlur={searchFood} type='text' id='' />
            <button onClick={searchMeal}>Search</button>
            <div className='flex'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-9/12 gap-10 ml-10 m-10 lg:m-20'>
                    {
                        meals.map(meal => <Meal key={meal.idMeal} meal={meal} addToOrder={() => addToOrder(meal)}></Meal>)
                    }
                </div>


                <div className='w-3/12 mr-10 my-20 border-2 rounded-md p-5'>

                    <Order order={order} removeOrder={removeOrder}></Order>

                </div>
            </div>
        </div>
    );
};

export default Meals;