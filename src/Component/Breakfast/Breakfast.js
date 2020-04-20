import React, { useState } from 'react';
import BreakfastFood from '../BreakfastFood/BreakfastFood';
import './Breakfast.css'
import { useEffect } from 'react';
import Header from '../Header/Header';

const Breakfast = () => {

    const [data, setData] = useState([])
    useEffect( ()=>{
        fetch('http://hot-onion-restaurant.herokuapp.com/breakfast')
        .then(res => res.json())
        .then( data => {
            setData(data)
        })
    }, [])

    const [cart, setCart] = useState([])
    const cartHandler = (clickedFood) => {
        const food = [...cart, clickedFood]
        setCart(food)
    };
    return (
        <div>
            
            <div>
                <h2 style={{textAlign:"center"}}>Breakfast Item</h2>
                <div className="row container">
                    {
                        data.map( (singleDat) => <BreakfastFood allSingleData={singleDat} cartHandler={cartHandler} ></BreakfastFood> )
                    }
                </div>
                
            </div>
            <div>
                {
                    <Header newCart={cart.length}></Header>
                }
            </div>
        </div>
    );
};

export default Breakfast;