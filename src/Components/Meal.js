import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const {strMeal,strMealThumb,strCategory} = props.meal
    const{handleAddToCart} = props
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h4>Name : {strMeal}</h4>
            <p>Category  :{strCategory}</p>
            <button onClick={()=>{handleAddToCart(props.meal)}}>Add To Cart</button>
        </div>
    );
};

export default Meal;