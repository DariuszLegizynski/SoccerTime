import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSignin } from "../../actions/auth/getSignin";

const UserSign = () => {
    const dispatch = useDispatch();

    const [ userStatus, setUserStatus ] = useState ({
        email: "",
        password: ""
    })

    const handleSubmit = (event) => {
        dispatch(getSignin(userStatus));
        event.preventDefault();
    }

    const handleChange = (event) => {
        const { id, value } = event.target;
        setUserStatus({
                ...userStatus,
                [id]: value
        })
    }

    const showLogin = () => {
        return (
            <div>
                <h4>Login</h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="password">Your Password</label>
                        <input type="password" id="password" onChange={handleChange} required />
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