import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const {strMeal,strMealThumb,strCategory} = props.meal
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h4>Name : {strMeal}</h4>
            <p>Category  :{strCategory}</p>
            <button>Add To Cart</button>
        </div>
    );
};

export default Meal;