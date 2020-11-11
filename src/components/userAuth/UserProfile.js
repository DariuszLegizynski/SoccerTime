import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSignout } from "../../actions/auth/getSignout";
import _ from "lodash";
import shortid from "shortid";

import "./UserProfile.css";

//Private
const UserProfile = () => {
    const dispatch = useDispatch();
    const selectUserStatus = useSelector(state => state.auth.authMsg);
    const favoritedLeagues = useSelector(state => state.favoritedLeagues.favorites);
    const favoritedTeams = useSelector(state => state.favoritedTeams.favorites);

    console.log(favoritedLeagues);

    const handleSignout = () => {
        dispatch(getSignout());
    }

    const showLeagues = () => {
        if (!_.isEmpty(favoritedLeagues)) {
            return favoritedLeagues.map(el => {
                return (
                    <div className="AllLeagues__cardContainer linkWrapper fadeIn" key={shortid.generate()}>
                        <Link className="header__link link" to={{pathname: `/allLeagues/${el.leagueId}`}}>
                            <div className="AllLeagues__card">
                                <img className="AllLeagues__badge" src={el.leagueBadge} alt="League Badge" />
                            </div>
                            <h3 className="AllLeagues__h3 h3">
                                {el.leagueName}
                            </h3>
                        </Link>
                    </div>
                )
            })
        } else {
            return <p>no favorited leagues found</p>
        }
    }

    const showTeams = () => {
        if (!_.isEmpty(favoritedTeams)) {
            return favoritedTeams.map(el => {
                return (
                    <div key={shortid.generate()}>
                        <Link className="header__link link" to={`/allTeams/${el.teamId}`}>
                            <div className="AllLeagues__card">
                                <img className="__teamBadge" src={el.teamBadge} alt="Team Badge" />
                            </div>
                            <h3 className="AllLeagues__h3 h3">
                                {el.teamName}
                            </h3>
                        </Link>
                    </div>
                )
            })
        } else {
            return <p>no favorited teams found</p>
        }
    }

    return(
        <div className="user-profile">
            <aside className="user-profile__sidebar">
                <nav className="user-profile__nav">
                    <div className="user-profile__profile">
                        <img className="user-profile__image" alt="avatar" />
                        <div className="user-profile__info">
                            <h2 className="user-profile__h2 h2">
                                Welcome Guest
                            </h2>
                            <p className="user-profile__user">
                                Guest
                            </p>
                        </div>
                        <p className="user-profile__user-status">
                            {selectUserStatus}
                        </p>
                        <button className="user-profile__btn btn" onClick={handleSignout}>
                            Log out
                        </button>
                    </div>
                </nav>
            </aside>
            <main className="user-profile__main">
                <div className="user-profile__fav">
                    <header className="user-profile__header">
                        <h3 className="user-profile__h3 h3">
                            Favorite Leagues
                        </h3>
                        <hr className="user-profile__hr hr" />
                    </header>
                    <div className="user-profile__list">
                    {showLeagues()}
                    </div>
                </div>
                <div className="user-profile__fav">
                    <header className="user-profile__header">
                        <h3 className="user-profile__h3 h3">
                            Favorite Leagues
                        </h3>
                        <hr className="user-profile__hr hr" />
                    </header>
                    <div className="user-profile__list">
                    {showTeams()}
                    </div>
                </div>
            </main>
            <Link to={"/"}>Home</Link>
        </div>
    )
}

export default UserProfile;