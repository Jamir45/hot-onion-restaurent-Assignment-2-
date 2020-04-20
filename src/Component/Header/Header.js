import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import Logo from '../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../Login/useAuth';

const Header = (props) => {
    const cart = props.newCart;
    console.log(cart)
    const auth = useAuth();
    
    return (
        
        <div className="mainNav">
            <nav className="navbar navbar-expand navbar-light bg-white py-2 fixed-top">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        <img src={Logo} alt="Hot Onion Logo"/>
                    </a>
                    <div id="align">
                        <Link to="/cart">
                            <span id="icon"><FontAwesomeIcon icon={faCartArrowDown}/> <span id="count">{cart}</span> </span>
                        </Link>
                        {
                            auth.user ? <Link to="/login"><img id='profile' className="rounded-circle" src={auth.user.photoURL} alt=""></img></Link> :
                            <Link to="/login" id="sign">Sign in</Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;