import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    
    const auth = useSelector(state => state.auth.authenticated);

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
            {!auth ?
            <div>
                <Link to={"/login"}>
                    Login
                </Link>
            </div> : null
            }
            {!auth ?
            <div>
                <Link to={"/signup"}>
                    SignUp
                </Link>
            </div> : null
            }
            {auth ?
            <div>
                <Link to={"/user"}>
                    User Profile
                </Link>
            </div> : null
            }
        </div>
    )
}

export default Header;