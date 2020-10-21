import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getSignup } from "../../actions/auth/getSignup";
import _ from "lodash";

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
            <div>
                <h4>SignUp</h4>
                <form onSubmit={registerNewUser}>
                    <div>
                        <label htmlFor="firstName">First Name: </label>
                        <input type="text" id="firstName" onChange={handleChange} placeholder="First Name" required />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name: </label>
                        <input type="text" id="lastName" onChange={handleChange} placeholder="Last Name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" onChange={handleChange} placeholder="Email Address" required />
                    </div>
                    <div>
                        <label htmlFor="password">Your Password</label>
                        <input type="password" id="password" onChange={handleChange} placeholder="Password" required />
                    </div>
                    <button>SignUp</button>
                    {
                        auth.authenticated ? 
                        <Redirect to="/user" /> : null
                    }
                    <p>{currentSignupState()}</p>
                </form>
            </div>
        )
    }

    return (
        <div>
            {showSignUp()}
            <Link to={"/login"}><p>Login</p></Link>
            <Link to={"/"}>Back</Link>
        </div>
    )
}

export default UserSignUp;