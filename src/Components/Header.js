import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div className='logo'>
                <p>YourMeal</p>
            </div>
            <div className='menu'>
                <a href="/">Order Now</a>
                <a href="/">Order Summery</a>
                <a href="/">Your Order</a>
            </div>
        </div>
    );
};

export default Header;