import React, { useEffect, useState } from 'react';
import Meal from './Meal.js';
import Cart from './Cart'
import './Meals.css'

const Meals = () => {
    const [allMeals, setMeals] = useState([])
    const [singleMeal,setCart] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    function handleAddToCart(meal){
        console.log(meal)
        setCart(meal)
    }
    return (
        <div className="main-container">
            <div className='meals-container'>
                {allMeals.map(meal => <Meal meal={meal} key={meal.idMeal} handleAddToCart={handleAddToCart}></Meal>)}
            </div>
            <div className="order-container">
                <Cart meal = {singleMeal}></Cart>
            </div>
        </div>
    );
};

export default Meals;