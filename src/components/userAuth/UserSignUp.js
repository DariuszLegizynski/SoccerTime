import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignUp = () => {

    const [ userStatus, setUserStatus ] = useState ({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    })

    const handleSubmit = (event) => {
        console.log(userStatus);
        event.preventDefault();
    }

    const handleChange = (event) => {
        const { id, value } = event.target;
        setUserStatus((prevValue) => {
            return {
                ...prevValue,
                [id]: value
            }
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
                        <label htmlFor="signUp-email">Email address</label>
                        <input type="email" id="signUp-email" onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="signUp-password">Your Password</label>
                        <input type="password" id="signUp-password" onChange={handleChange} required />
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