import React from "react";
import { Link } from "react-router-dom";

const UserSign = () => {

    const showLogin = () => {
        return (
            <div>
                <h4>Login</h4>
                <form>
                    <div>
                        <input type="email" id="login-email" required />
                        <label htmlFor="login-email">Email address</label>
                    </div>
                    <div>
                        <input type="password" id="login-password" required />
                        <label htmlFor="login-password">Your Password</label>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        )
    }

    return (
        <div>
            {showLogin()}
            <Link to={"/UserPanel"}>Back</Link>
        </div>
    )
}

export default UserSign;