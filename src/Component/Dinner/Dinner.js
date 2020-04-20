import React, { useState, useEffect } from 'react';
import DinnerFood from '../DinnerFood/DinnerFood';
import Header from '../Header/Header';

const Dinner = () => {
    const [data, setData] = useState([])
    useEffect( ()=>{
        fetch('http://hot-onion-restaurant.herokuapp.com/dinner')
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
                <h2 style={{textAlign:"center"}}>Dinner Item</h2>
                <div className="row container">
                    {
                        data.map( (singleDat) => <DinnerFood allSingleData={singleDat} cartHandler={cartHandler} ></DinnerFood> )
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

export default Dinner;