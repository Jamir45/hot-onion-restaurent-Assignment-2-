import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BreakfastDetails.css'
import foodData from '../../foodData/breakfast'
import { useEffect } from 'react';

const BreakfastDetails = () => {
    const {foodkey} = useParams();

    const [data, setData] = useState([])
    useEffect( ()=>{
        fetch('http://hot-onion-restaurant.herokuapp.com/breakfast/'+foodkey)
        .then(res => res.json())
        .then( datas => setData(datas));
    }, [])

    const {name, details, image, price} = data;
    console.log(data);
    const [count, setCount] = useState(1);

    return (
        <div className="fullCard container">
            <div className="cardDetails">
            <h1>{name}</h1>
            <p>{details}</p>
            <div className="priceBtn">
                    <h1>${price}</h1>
                    <div className="button">
                        <div className="btnBox">
                            <button className="twoBtn" onClick={ () => setCount(count - 1)}>-</button><span>{count}</span>
                            <button className="twoBtn" onClick={ () => setCount(count + 1)}>+</button>
                        </div>
                    </div> 
                </div>           
            </div>
            <div className="cardImage">
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default BreakfastDetails;