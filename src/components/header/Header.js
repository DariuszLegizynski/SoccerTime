import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    const showState = useSelector(state => state);
    console.log(showState.firebase);
    return(
        <div>
            <div>
            <Link to={"/"}>
                Logo
            </Link>
            </div>
            <nav>
                <NavLink to={"/"}>SEARCH</NavLink>
            </nav>
            <div>
                <Link to={"/login"}>
                    Login
                </Link>
            </div>
            <div>
                <Link to={"/signup"}>
                    SignUp
                </Link>
            </div>
        </div>
    )
}

export default Header;