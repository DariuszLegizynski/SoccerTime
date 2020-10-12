import React from "react";
import { Link } from "react-router-dom";
import UserSignIn from "./UserSignIn";
import UserSignUp from "./UserSignUp";

const UserPanel = () => {

    return(
        <div>
            <Link to={"/"}>Home</Link>
            <div>
                <UserSignIn />
            </div>
            <div>
                <UserSignUp />
            </div>
            <div>
                <p>Continue as Guest</p>
            </div>
        </div>
    )
}

export default UserPanel;