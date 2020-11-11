import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import _ from "lodash";

import { getSignin } from "../../actions/auth/getSignin";
import { getSignInAnon } from "../../actions/auth/getSignInAnon";

import "./UserSign.css"

const UserSign = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [ userSignin, setUserSignin ] = useState ({
        email: "",
        password: ""
    })

    const signInUser = (event) => {
        event.preventDefault();
        dispatch(getSignin(userSignin));
    }

    const handleChange = (event) => {
        const { id, value } = event.target;
        setUserSignin({
                ...userSignin,
                [id]: value
        })
    }

    const currentSigninState = () => {
        if(!_.isEmpty(auth.authMsg)){
            return auth.authMsg;
        }
    }

    const showLogin = () => {
        return (
            <section className="sign__logIn">
                <h4 className="sign__h4 h4 fadeInFromTop">Log In</h4>
                <form className="sign__form" onSubmit={signInUser}>
                    <div className="fadeInFromLeft">
                        <label className="sign__label" htmlFor="email">Email address:</label>
                        <input className="sign__input" type="email" id="email" onChange={handleChange} placeholder="Email Adress" required />
                    </div>
                    <div className="fadeInFromRight">
                        <label className="sign__label" htmlFor="password">Your Password:</label>
                        <input className="sign__input" type="password" id="password" onChange={handleChange} placeholder="Password" required />
                    </div>
                    <button className="sign__btn btn">Login</button>
                    {
                        auth.authenticated ? 
                        <Redirect to="/user" /> : null
                    }
                    <p className="sign__p">{currentSigninState()}</p>
                </form>
            </section>
        )
    }

    return (
        <section className="sign fadeIn">
            <div className="sign__auth">
                {showLogin()}
                <section className="sign__links">
                    <Link className="sign__link link" to={"/signup"}>
                        <button className="sign__btn btn" tabIndex="-1">
                            SignUp
                        </button>
                    </Link>
                    <Link className="sign__link--guest link" onClick={() => dispatch(getSignInAnon())} to={"/user"}>
                        Continue as Guest &rarr;
                    </Link>
                    <Link className="sign__link--back link" to={"/"}>
                        &#8592; Back
                    </Link>
                </section>
            </div>
            <div className="sign__image">
                <h2 className="sign__h2 h2">
                    Get your favorite leagues and teams 
                </h2>
            </div>
        </section>
    )
}

export default UserSign;