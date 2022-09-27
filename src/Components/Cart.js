import React from 'react';

const Cart = (props) => {
    console.log(props.meal)
    const {strMeal} = props.meal
    return (
        <div>
            <p>This is cart</p>
            <p>{strMeal}</p>
        </div>
    );
};

export default Cart;