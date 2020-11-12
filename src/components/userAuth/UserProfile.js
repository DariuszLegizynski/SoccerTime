import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSignout } from "../../actions/auth/getSignout";
import _ from "lodash";
import shortid from "shortid";

import { getDeleteFavoritedLeagues } from "../../actions/favorites/getDeleteFavoritedLeagues";

import "./UserProfile.css";
import guestAvatar from "../../resources/images/GuestAvatar/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg"

//Private
const UserProfile = () => {
    const dispatch = useDispatch();
    const favoritedLeagues = useSelector(state => state.favoritedLeagues.favorites);
    const favoritedTeams = useSelector(state => state.favoritedTeams.favorites);

    const handleSignout = () => {
        dispatch(getSignout());
    }

    const showLeagues = () => {
        if (!_.isEmpty(favoritedLeagues)) {
            return favoritedLeagues.map(el => {
                return (
                    <div className="user-profile__cardContainer linkWrapper fadeIn" key={shortid.generate()}>
                        <Link className="header__link link" to={{pathname: `/allLeagues/${el.leagueId}`}}>
                            <div className="user-profile__card">
                                <img className="user-profile__badge" src={el.leagueBadge} alt="League Badge" />
                            </div>
                            <h3 className="user-profile__h3 h3">
                                {el.leagueName}
                            </h3>
                        </Link>
                        <button className="user-profile__btn--remove btn" onClick={() => dispatch(getDeleteFavoritedLeagues(el.leagueId))}>
                            Remove
                        </button>
                    </div>
                )
            })
        } else {
            return <p className="user-profile__no-fav fadeIn">no favorite leagues found</p>
        }
    }

    const showTeams = () => {
        if (!_.isEmpty(favoritedTeams)) {
            return favoritedTeams.map(el => {
                return (
                    <div className="user-profile__cardContainer linkWrapper fadeIn" key={shortid.generate()}>
                        <Link className="header__link link" to={`/allTeams/${el.teamId}`}>
                            <div className="user-profile__card">
                                <img className="user-profile__badge" src={el.teamBadge} alt="Team Badge" />
                            </div>
                            <h3 className="user-profile__h3 h3">
                                {el.teamName}
                            </h3>
                        </Link>
                        <button className="user-profile__btn--remove btn" onClick={() => dispatch(getDeleteFavoritedLeagues(el.leagueId))}>
                            Remove
                        </button>
                    </div>
                )
            })
        } else {
            return <p className="user-profile__no-fav fadeIn">no favorite teams found</p>
        }
    }

    return(
        <div className="user-profile fadeIn">
            <aside className="user-profile__sidebar">
                <nav className="user-profile__nav">
                    <div className="user-profile__profile">
                        <img className="user-profile__image fadeInFromLeft" src={guestAvatar} alt="avatar" />
                        <div className="user-profile__info">
                            <h2 className="user-profile__h2 h2">
                                Welcome Guest
                            </h2>
                            <p className="user-profile__user-type">
                                Guest
                            </p>
                        </div>
                        <button className="user-profile__btn btn" onClick={handleSignout}>
                            Log out
                        </button>
                    </div>
                </nav>
            </aside>
            <main className="user-profile__main">
                <div className="user-profile__fav">
                    <header className="user-profile__header">
                        <h3 className="user-profile__h3 h3 fadeIn">
                            Favorite Leagues
                        </h3>
                        <hr className="user-profile__hr hr" />
                    </header>
                    <div className="user-profile__list fadeIn">
                        {showLeagues()}
                    </div>
                </div>
                <div className="user-profile__fav">
                    <header className="user-profile__header">
                        <h3 className="user-profile__h3 h3 fadeIn">
                            Favorite Teams
                        </h3>
                        <hr className="user-profile__hr hr" />
                    </header>
                    <div className="user-profile__list fadeIn">
                        {showTeams()}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default UserProfile;