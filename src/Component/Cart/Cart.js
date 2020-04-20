import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    console.log(cart)
    return (
        <div style={{textAlign:'center'}}>
            <h1>This is cart component</h1>
        </div>
    );
};

export default Cart;