import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSignout } from "../../actions/auth/getSignout";

//Private
const UserProfile = () => {
    const dispatch = useDispatch();
    const selectUserStatus = useSelector(state => state.auth.authMsg);

    console.log(selectUserStatus);

    const handleSignout = () => {
        dispatch(getSignout());
    }

    const showData = () => {
        return (
            <p>Showing awesome Data!</p>
        )
    }

    return(
        <div>
            <p>You are in user Profile</p>
            <p>{selectUserStatus}</p>
            {showData()}
            <button onClick={handleSignout}>Log out</button>

            <Link to={"/"}>Home</Link>
        </div>
    )
}

export default UserProfile;