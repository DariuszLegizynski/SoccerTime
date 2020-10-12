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
            </nav>
            <div>
                <Link to={"/userPanel"}>
                    User
                </Link>
            </div>
            <div>
                <Link to={"/profile/:status"}>
                    Profile
                </Link>
            </div>
        </div>
    )
}

export default Header;