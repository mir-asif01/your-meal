import React, { useEffect, useState } from 'react';
import Meal from './Meal.js';
import './Meals.css'

const Meals = () => {
    const [allMeals, setMeals] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    return (
        <div className="main-container">
            <div className='meals-container'>
                {allMeals.map(meal => <Meal meal={meal} key={meal.idMeal}></Meal>)}
            </div>
            <div className="order-container">
                <p>Order Container</p>
            </div>
        </div>
    );
};

export default Meals;