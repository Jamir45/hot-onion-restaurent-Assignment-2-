import React, { useEffect } from 'react';
import { useState } from 'react';
import LunchFood from '../LunchFood/LunchFood';
import Header from '../Header/Header';
import Cart from '../Cart/Cart';

const Lunch = () => {
    const [data, setData] = useState([])
    useEffect( ()=>{
        fetch('http://hot-onion-restaurant.herokuapp.com/lunch')
        .then(res => res.json())
        .then( data => {
            console.log(data)
            setData(data)
        })
    }, [])
    
    const [cart, setCart] = useState([]);
    const cartHandler = (clickedFood) => {
        const food = [...cart, clickedFood]
        setCart(food)
    };
    return (
        <div>
            <div>
            <h2 style={{textAlign:"center"}}>Lunch Item</h2>
                <div className="row container">
                    {
                        data.map( (singleDat) => <LunchFood allSingleData={singleDat} cartHandler={cartHandler} ></LunchFood> )
                    }
                </div>
                
            </div>
            <div>
                <Cart newCart={cart.length}></Cart>
                {
                    <Header newCart={cart.length}></Header>
                    
                }
            </div>
        </div>
    );
};

export default Lunch;