import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import _ from "lodash";

import { getSignup } from "../../actions/auth/getSignup";
import { getSignInAnon } from "../../actions/auth/getSignInAnon";

import "./UserSign.css"

const UserSignUp = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [ userSignup, setUserSignup ] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const registerNewUser = (event) => {
        event.preventDefault();       
        dispatch(getSignup(userSignup));
    }

    const handleChange = (event) => {
        const { id, value } = event.target;
        setUserSignup({
                ...userSignup,
                [id]: value
        })
    }

    const currentSignupState = () => {
        if(!_.isEmpty(auth.authMsg)){
            return auth.authMsg;
        }
    }

    const showSignUp = () => {
        return (
            <section className="sign__logIn--signUp">
                <h4 className="sign__h4 h4 fadeInFromTop">
                    SignUp
                </h4>
                <form className="sign__form" onSubmit={registerNewUser}>
                    <div className="sign__logIn__wrapper fadeInFromLeft">
                        <label className="sign__label" htmlFor="firstName">First Name: </label>
                        <input className="sign__input" type="text" id="firstName" onChange={handleChange} placeholder="First Name" required />
                    </div>
                    <div className="sign__logIn__wrapper fadeInFromRight">
                        <label className="sign__label" htmlFor="lastName">Last Name: </label>
                        <input className="sign__input" type="text" id="lastName" onChange={handleChange} placeholder="Last Name" required />
                    </div>
                    <div className="sign__logIn__wrapper fadeInFromLeft">
                        <label className="sign__label" htmlFor="email">Email address</label>
                        <input className="sign__input" type="email" id="email" onChange={handleChange} placeholder="Email Address" required />
                    </div>
                    <div className="sign__logIn__wrapper fadeInFromRight">
                        <label className="sign__label" htmlFor="password">Your Password</label>
                        <input className="sign__input" type="password" id="password" onChange={handleChange} placeholder="Password" required />
                    </div>
                    <button className="sign__btn btn">SignUp</button>
                    {
                        auth.authenticated ? 
                        <Redirect to="/user" /> : null
                    }
                    <p className="sign__p">{currentSignupState()}</p>
                </form>
            </section>
        )
    }

    return (
        <section className="sign fadeIn">
            <div className="sign__auth">
                {showSignUp()}
                <section className="sign__links">
                    <Link className="sign__link link" to={"/login"}>
                        <button className="sign__btn btn" tabIndex="-1">
                            Login
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

export default UserSignUp;