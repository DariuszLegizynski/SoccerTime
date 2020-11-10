import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getSignin } from "../../actions/auth/getSignin";
import _ from "lodash";

import "./UserSignIn.css"

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
            <section className="signIn__logIn">
                <h4 className="signIn__h4 h4">Log In</h4>
                <form className="signIn__form" onSubmit={signInUser}>
                    <div className="signIn__email">
                        <label className="signIn__label" htmlFor="email">Email address</label>
                        <input className="signIn__Input" type="email" id="email" onChange={handleChange} placeholder="Email Adress" required />
                    </div>
                    <div className="signIn_pass">
                        <label className="signIn__label" htmlFor="password">Your Password</label>
                        <input className="signIn__Input" type="password" id="password" onChange={handleChange} placeholder="Password" required />
                    </div>
                    <button className="signIn__btn btn">Login</button>
                    {
                        auth.authenticated ? 
                        <Redirect to="/user" /> : null
                    }
                    <p className="signIn__p">{currentSigninState()}</p>
                </form>
            </section>
        )
    }

    return (
        <section className="signIn">
            <div className="signIn__auth">
                {showLogin()}
                <Link className="signIn__link" to={"/signup"}>
                    <button className="signIn__btn btn">
                        SignUp
                    </button>
                </Link>
                <Link className="signIn__link" to={"/"}>
                    Continue as Guest
                </Link>
                <Link className="signIn__link" to={"/"}>
                    Back
                </Link>
            </div>
            <div className="signIn__image">
                <h2 className="signIn__h2 h2">
                    Get your favorite leagues and teams 
                </h2>
            </div>
        </section>
    )
}

export default UserSign;