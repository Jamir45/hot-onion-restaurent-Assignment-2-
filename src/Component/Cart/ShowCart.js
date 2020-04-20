import React from 'react';
import './ShowCart.css'
import { Link } from 'react-router-dom';

const showCart = () => {
    return (
        <div style={{textAlign:"center"}}>
            <Link to="/cart">
            <button className="checkout">Check Out Your Food</button>
            </Link>
        </div>
    );
};

export default showCart;