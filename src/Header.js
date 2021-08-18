import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
import { Link } from "react-router-dom";


function Header() {
 const [{ basket,user} ,dispatch]=useStateValue();
 console.log(basket);

 const handleAuthentication=() =>{
     if(user){
        auth.signOut();
     }
 }

    return (
        <nav className="header">
            {  /*logo on the left -->image*/}

            <Link to="/">
                <img
                    className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>

            { /*search box*/}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            { /* 3 links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={handleAuthentication} 
                        className="header__option">
                        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="header__optionLineTwo">{user ? 'SignOut':'SignIn'}</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="/Orders" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/* 4th link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* Shopping basket} icon */}
                        <ShoppingBasketIcon />
                        {/*Number of items in the basket */}
                        <span className="header__optionLineTwo  header__basketCount">{basket?.length}</span>
                    </div>
                 </Link>
            </div>
            { /* basket icon with numober */}
        </nav>
    );

}

export default Header;