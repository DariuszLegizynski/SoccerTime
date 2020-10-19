import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSignin } from "../../actions/auth/getSignin";

const UserSign = () => {
    const dispatch = useDispatch();

    const [ email, setEmail ] = useState ("");
    const [ password, setPassword ] = useState ("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
    }

    const showLogin = () => {
        return (
            <div>
                <h4>Login</h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required />
                    </div>
                    <div>
                        <label htmlFor="password">Your Password</label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
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