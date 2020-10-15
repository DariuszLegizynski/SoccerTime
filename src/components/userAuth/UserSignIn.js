import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getSignin } from "../../actions/auth/getSignin";

const UserSign = () => {

    const [ userStatus, setUserStatus ] = useState ({
        email: "",
        password: ""
    })

    const handleSubmit = (event) => {
        dispatchEvent(getSignin(userStatus));
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

    const showLogin = () => {
        return (
            <div>
                <h4>Login</h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="signIn-email">Email address</label>
                        <input type="email" id="signIn-email" onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="signIn-password">Your Password</label>
                        <input type="password" id="signIn-password" onChange={handleChange} required />
                    </div>
                    <button>Login</button>
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