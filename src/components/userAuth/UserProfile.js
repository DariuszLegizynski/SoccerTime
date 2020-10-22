import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSignout } from "../../actions/auth/getSignout";
import _ from "lodash";
import shortid from "shortid";

//Private
const UserProfile = () => {
    const dispatch = useDispatch();
    const selectUserStatus = useSelector(state => state.auth.authMsg);
    const favoritedLeagues = useSelector(state => state.favoritedLeagues.favorites);
    const favoritedTeams = useSelector(state => state.favoritedTeams.favorites);
    console.log(favoritedLeagues);
    console.log(favoritedTeams);

    const handleSignout = () => {
        dispatch(getSignout());
    }

    const showLeagues = () => {
        if (!_.isEmpty(favoritedLeagues)) {
            return favoritedLeagues.map(el => {
                return (
                    <p key={shortid.generate()}>
                        {el}
                    </p>
                )
            })
        } else {
            return <p>no favorited leagues</p>
        }
    }

    const showTeams = () => {
        if (!_.isEmpty(favoritedTeams)) {
            return favoritedTeams.map(el => {
                return (
                    <p key={shortid.generate()}>
                        {el}
                    </p>
                )
            })
        } else {
            return <p>no favorited teams</p>
        }
    }

    return(
        <div>
            <p>You are in user Profile</p>
            <p>{selectUserStatus}</p>
            <p>Favorite Leagues</p>
            {showLeagues()}
            <p>favorited Teams</p>
            {showTeams()}
            <button onClick={handleSignout}>Log out</button>

            <Link to={"/"}>Home</Link>
        </div>
    )
}

export default UserProfile;