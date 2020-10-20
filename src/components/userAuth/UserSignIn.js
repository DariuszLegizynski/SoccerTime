import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSignin } from "../../actions/auth/getSignin";
import _ from "lodash";

const UserSign = () => {
    const authState = useSelector(state => state.signin.authMsg);
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
        if(!_.isEmpty(authState)){
            return authState;
        }
    }

    const showLogin = () => {
        return (
            <div>
                <h4>Login</h4>
                <form onSubmit={signInUser}>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" onChange={handleChange} placeholder="Email Adress" required />
                    </div>
                    <div>
                        <label htmlFor="password">Your Password</label>
                        <input type="password" id="password" onChange={handleChange} placeholder="Password" required />
                    </div>
                    <button>Login</button>
                    <p>{currentSigninState()}</p>
                </form>
            </div>
        )
    }

    return (
        <div>
            {showLogin()}
            <Link to={"/signup"}><p>SignUp</p></Link>
            <Link to={"/"}>Back</Link>
        </div>
    )
}

export default UserSign;