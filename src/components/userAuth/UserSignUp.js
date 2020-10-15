import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSignup } from "../../actions/auth/getSignup";

const UserSignUp = () => {
    const dispatch = useDispatch();

    const [ userSignUp, setUserSignUp ] = useState ({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    })

    const handleSubmit = (event) => {
        dispatch(getSignup(userSignUp));
        event.preventDefault();
    }

    const handleChange = (event) => {
        const { id, value } = event.target;
        setUserSignUp({
                ...userSignUp,
                [id]: value

        })
    }

    const showSignUp = () => {
        return (
            <div>
                <h4>SignUp</h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name: </label>
                        <input type="text" id="firstName" onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name: </label>
                        <input type="text" id="lastName" onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="mail">Email address</label>
                        <input type="email" id="email" onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="password">Your Password</label>
                        <input type="password" id="password" onChange={handleChange} required />
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