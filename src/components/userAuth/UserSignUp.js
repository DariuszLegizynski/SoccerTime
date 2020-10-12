import React from "react";
import { Link } from "react-router-dom";

const UserSignUp = () => {

    const showSignUp = () => {
        return (
            <div>
                <h4>SignUp</h4>
                <form>
                    <div>
                        <input type="email" id="signup-email" required />
                        <label htmlFor="signup-email">Email address</label>
                    </div>
                    <div>
                        <input type="password" id="signup-password" required />
                        <label htmlFor="signup-password">Your Password</label>
                    </div>
                    <button>SignUp</button>
                </form>
            </div>
        )
    }

    return (
        <div>
            {showSignUp()}
            <Link to={"/userPanel"}>Back</Link>
        </div>
    )
}

export default UserSignUp;