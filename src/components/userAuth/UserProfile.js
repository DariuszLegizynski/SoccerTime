import React from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
    return(
        <div>
            <p>You are in user Profile</p>
            <Link to={"/"}>Home</Link>
        </div>
    )
}

export default UserProfile;