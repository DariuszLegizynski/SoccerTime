import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import _ from "lodash";

import { getSearchTeam } from "../../actions/team/getSearchTeam";
import { getSignout } from "../../actions/auth/getSignout";

//styles
import "./Header.css";
import logo from "../../resources/logo/SoccerTime.png";
import iconSprites from "../../resources/icons/icomoon/sprite.svg";

const Header = () => {
    const auth = useSelector(state => state.auth.authenticated);
    const [searchTeam, setSearchTeam ] = useState("");
    const dispatch = useDispatch();
    const searchTeamSelector = useSelector(state => state.searchTeam.data)

    const handleSignout = () => {
        dispatch(getSignout());
    }

    const handleChange = (event) => {
        setSearchTeam(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(getSearchTeam(searchTeam));
    }

    const waitForSearchTeamResults = () => {
        if(!_.isEmpty(searchTeamSelector)){
            return <Redirect to={`/searchedTeam/${searchTeam}`} />
        }
    }

    return ( 
        <div className="header">
            <div className="header__logo fadeInFromLeft">
                <Link to={"/"} className="header__link--logo link">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
            </div>
            <nav className="header__searchbar">
                <form className="header__form" onSubmit={handleSubmit}>
                    <input className="header__input fadeInFromRight" type="text" onChange={handleChange} placeholder="Search for Team" />
                    <button className="header__btn--search btn bounce">
                        <svg className="header__icon--search icon">
                            <use href={iconSprites + "#icon-search"} />
                        </svg>
                    </button>
                    {waitForSearchTeamResults()}
                </form>
            </nav>
            <div className="header__authentication">
                {!auth ?
                    <Link to={"/login"} className="header__link link">
                        <button className="header__btn btn fadeInFromLeft">
                            <svg className="header__icon icon">
                                <use href={iconSprites + "#icon-enter"} />
                            </svg>
                        </button>
                    </Link> : null
                }
                {!auth ?
                    <Link to={"/signup"} className="header__link link">
                        <button className="header__btn btn fadeInFromLeft">
                            <svg className="header__icon icon">
                                <use href={iconSprites + "#icon-t-shirt"} />
                            </svg>
                        </button>
                    </Link> : null
                }
                {auth ?
                    <Link to={"/"} className="header__link link">
                        <button className="header__btn btn fadeInFromLeft">
                            <svg className="header__icon icon">
                                <use href={iconSprites + "#icon-user-circle"} />
                            </svg>
                        </button>
                    </Link> : null
                }
                {auth ?
                    <button onClick={handleSignout} className="header__btn btn fadeInFromLeft">
                        <svg className="header__icon icon">
                            <use href={iconSprites + "#icon-exit"} />
                        </svg>
                    </button> : null
                }
            </div>
        </div>
    )
}

export default Header;