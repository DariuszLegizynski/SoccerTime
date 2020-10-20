import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSignout } from "../../actions/auth/getSignout";
import _ from "lodash";

const UserSignOut = () => {
    const authState = useSelector(state => state.signup.authMsg);
    const dispatch = useDispatch();

    const [ userSignout, setUserSignout ] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const signoutUser = (event) => {
        event.preventDefault();       
        dispatch(getSignout(userSignout));
    }

    const currentSignoutState = () => {
        if(!_.isEmpty(authState)){
            return authState;
        }
    }

    const showSignOut = () => {
        return (
            <div>
                <h4>SignOut</h4>
                <button>Sign Out</button>
                <p>{currentSignoutState()}</p>
            </div>
        )
    }

    return (
        <div>
            <p>{showSignOut}</p>
        </div>
    )
}

export default UserSignOut;