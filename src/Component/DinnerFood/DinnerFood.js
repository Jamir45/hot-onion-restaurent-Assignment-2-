import React from 'react';
import { Link } from 'react-router-dom';

const DinnerFood = (props) => {
    const {name, subName, image, price, key} = props.allSingleData
    return (
            <div className="col-md-4 md-4">
                <div id="fullCart">
                    <Link onClick={ () => props.cartHandler(props.allSingleData)} to={"/dinnerDetails/"+key}>
                        <div className="card text-center">
                            <img id="imgSize" src={image} alt=""/>
                            <div className="card-body">
                                <h5>{name}</h5>
                                <p>{subName}</p>
                                <h4>Price: ${price}</h4>
                            </div>
                        </div>
                    </Link>
                    <button onClick={ () => props.cartHandler(props.allSingleData)}>Add to cart</button>
                </div>
            </div>
    );
};

export default DinnerFood;