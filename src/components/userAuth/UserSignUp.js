import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSignup } from "../../actions/auth/getSignup";

const UserSignUp = () => {
    const dispatch = useDispatch();

    const [ firstName, setFirstName ] = useState ("");
    const [ lastName, setLastName ] = useState ("");
    const [ email, setEmail ] = useState ("");
    const [ password, setPassword ] = useState ("");


    // const handleSubmit = () => {
    //     registerNewUser();
    // }

    const registerNewUser = (event) => {
        event.preventDefault();
        const newUser = {
            firstName,
            lastName,
            email,
            password
        }

        dispatch(getSignup(newUser));
    }

    const showSignUp = () => {
        return (
            <div>
                <h4>SignUp</h4>
                <form onSubmit={registerNewUser}>
                    <div>
                        <label htmlFor="firstName">First Name: </label>
                        <input type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name: </label>
                        <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required />
                    </div>
                    <div>
                        <label htmlFor="password">Your Password</label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    </div>
                    <button>SignUp</button>
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