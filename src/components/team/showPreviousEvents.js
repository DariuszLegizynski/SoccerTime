import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import _ from "lodash";
import shortid from "shortid";

import { getPreviousTeamEvents } from "../../actions/team/getPreviousTeamEvents";

import "./team.css";
import iconSprites from "../../resources/icons/icomoon/sprite.svg";
import altBackgroundEvent from "../../resources/images/alt/soccer-1490541.jpg";

const ShowPreviousEvents = ({idTeam}) => {
    const dispatch = useDispatch();

    const selectPreviousTeamEvents = useSelector(state => state.previousTeamEvents);

    useEffect (() => {
        dispatch(getPreviousTeamEvents(idTeam))
    }, [dispatch, idTeam]);

    // Toggles visibility of team events
    const handleTeamDescription = () => {
        document.querySelector(".team__previous__card-container").classList.toggle("team__previous__card-container__hide");
        document.querySelector(".team__previous__indicator__plus").classList.toggle("team__previous__indicator__plus__show");
        document.querySelector(".team__previous__indicator__minus").classList.toggle("team__previous__indicator__minus__hide");
    }

        // when "enter" is pressed
        const handleTeamDescriptionOnPress = (event) => {
            if (event.key) {
                document.querySelector(".team__previous__card-container").classList.toggle("team__previous__card-container__hide");
                document.querySelector(".team__previous__indicator__plus").classList.toggle("team__previous__indicator__plus__show");
                document.querySelector(".team__previous__indicator__minus").classList.toggle("team__previous__indicator__minus__hide");
            }
        }

    const showData = () => {
        if(!_.isEmpty(selectPreviousTeamEvents.data.results)) {
            return selectPreviousTeamEvents.data.results.map(event => {
                return (
                    <div className="team__previous__card-container__card card__previous" key={shortid.generate()}>
                        <div className="team__previous__card-container__card__thumb">
                            <img className="team__previous__card-container__card__img" src={event.strThumb ? event.strThumb + "/preview" : altBackgroundEvent} alt="event thumb" />
                        </div>
                        <div className="team__previous__card-container__card__links">
                            <Link className="team__previous__card-container__card__links__link link--home-team link" to={`/allTeams/${event.idHomeTeam}`}>
                                <p className="team__previous__card-container__card__links__p p">
                                    {event.strHomeTeam}
                                </p>
                            </Link>
                            <p className="team__previous__card-container__card__links__p p">
                                {event.intHomeScore}
                                :
                                {event.intAwayScore}
                            </p>
                            <Link className="team__previous__card-container__card__links__link link--away-team link" to={`/allTeams/${event.idAwayTeam}`}>
                                <p className="team__previous__card-container__card__links__p p">
                                    {event.strAwayTeam}
                                </p>
                            </Link>
                        </div>
                        <div className="team__previous__card-container__card__info">
                            <h4 className="team__previous__card-container__card__h4 h4">Date</h4>
                            <p className="team__previous__card-container__card__p p">
                                {event.dateEvent}
                            </p>
                            <hr className="team__previous__card-container__card__hr hr" />
                            <h4 className="team__previous__card-container__card__h4 h4">Place</h4>
                            <p className="team__previous__card-container__card__p p">
                                {event.strVenue}
                            </p>
                            <hr className="team__previous__card-container__card__hr hr" />
                            <h4 className="team__previous__card-container__card__h4 h4">Spectators</h4>
                            <p className="team__previous__card-container__card__p p">
                                {event.intSpectators ? event.intSpectators : "0"}
                            </p>
                            <hr className="team__previous__card-container__card__hr hr" />
                            <h4 className="team__previous__card-container__card__h4 h4">Game Status</h4>
                            <p className="team__previous__card-container__card__p p">
                                {event.strStatus}
                            </p>
                        </div>
                        <div className="team__previous__card-container__card__video">
                            <iframe className="team__previous__card-container__card__video__iframe" title={event.strEvent} src={event.strVideo ? event.strVideo.replace("watch?v=", "embed/") : "about:blank"} allowFullScreen />
                        </div>
                    </div>
                )
            })
        }

        if(_.isEmpty(selectPreviousTeamEvents.data.events)) {
            return <p className="team__previous__no-events p">no past team events found</p>
        }

        if(selectPreviousTeamEvents.loading) {
            return <p className="team__previous__loading p">loading...</p>
        }

        if(selectPreviousTeamEvents.errorMsg !== "") {
            return <p className="team__previous__no-events p">{selectPreviousTeamEvents.errorMsg}</p>
        }

    return <p className="team__previous__no-events p">Unable to get the team's previous events</p>
    }

    return (
        <section className="team__events">
            <h2 className="team__previous__h2 h2">Past Team Events</h2>
            <button className="team__previous__btn btn" onClick={handleTeamDescription} onKeyPress={handleTeamDescriptionOnPress}>
                <svg tabIndex="-1" className="team__previous__indicator__plus team-icon icon">
                    <use href={iconSprites + "#icon-plus-circle"} />
                </svg>
                <svg tabIndex="-1" className="team__previous__indicator__minus team-icon icon">
                    <use href={iconSprites + "#icon-minus-circle"} />
                </svg>
            </button>
            <div className="team__previous__card-container">
                {showData()}
            </div>
        </section>
    )
}

export default ShowPreviousEvents;