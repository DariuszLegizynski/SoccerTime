import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return(
        <div>
            <div>
            <Link to={"/"}>
                Logo
            </Link>
            </div>
            <nav>
                <NavLink to={"/"}>SEARCH</NavLink>
                <NavLink to={"/private"} >Private</NavLink>
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