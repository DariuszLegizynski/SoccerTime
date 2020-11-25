import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import _ from "lodash";
import shortid from "shortid";

import { getNextTeamEvents } from "../../actions/team/getNextTeamEvents";

import "./team.css";
import iconSprites from "../../resources/icons/icomoon/sprite.svg";
import altBackgroundEvent from "../../resources/images/alt/soccer-1490541.jpg";

const ShowNextEvents = ({idTeam}) => {
    const dispatch = useDispatch();
    const selectNextTeamEvents = useSelector (state => state.nextTeamEvents);


    useEffect (() => {
        dispatch(getNextTeamEvents(idTeam))
    }, [dispatch, idTeam]);

        // Toggles visibility of team events
        const handleTeamDescription = () => {
            document.querySelector(".team__events__card-container").classList.toggle("team__events__card-container__hide");
            document.querySelector(".team__events__indicator__plus").classList.toggle("team__events__indicator__plus__show");
            document.querySelector(".team__events__indicator__minus").classList.toggle("team__events__indicator__minus__hide");
        }
    
            // when "enter" is pressed
            const handleTeamDescriptionOnPress = (event) => {
                if (event.key) {
                    document.querySelector(".team__events__card-container").classList.toggle("team__events__card-container__hide");
                    document.querySelector(".team__events__indicator__plus").classList.toggle("team__events__indicator__plus__show");
                    document.querySelector(".team__events__indicator__minus").classList.toggle("team__events__indicator__minus__hide");
                }
            }

    const showData = () => {
        if(!_.isEmpty(selectNextTeamEvents.data.events)) {
            return selectNextTeamEvents.data.events.map(event => {
                return (
                    <div className="team__events__card-container__card" key={shortid.generate()}>
                        <div className="team__events__card-container__card__thumb">
                            <img className="team__events__card-container__card__img" src={event.strThumb ? event.strThumb + "/preview" : altBackgroundEvent} alt="event thumb" />
                        </div>
                        <div className="team__events__card-container__card__links">
                            <Link className="team__events__card-container__card__links__link link--home-team link" to={`/allTeams/${event.idHomeTeam}`}>
                                <p className="team__events__card-container__card__links__p p">
                                    {event.strHomeTeam}
                                </p>
                            </Link>
                            <p className="team__events__card-container__card__links__p p">
                                :
                            </p>
                            <Link className="team__events__card-container__card__links__link link--away-team link" to={`/allTeams/${event.idAwayTeam}`}>
                                <p className="team__events__card-container__card__links__p p">
                                    {event.strAwayTeam}
                                </p>
                            </Link>
                        </div>
                        <div className="team__events__card-container__card__info">
                            <h4 className="team__events__card-container__card__h4 h4">Date</h4>
                            <p className="team__events__card-container__card__p p">
                                {event.dateEvent}
                            </p>
                            <hr className="team__events__card-container__card__hr hr" />
                            <h4 className="team__events__card-container__card__h4 h4">Time</h4>
                            <p className="team__events__card-container__card__p p">
                                {event.strTime}
                            </p>
                            <hr className="team__events__card-container__card__hr hr" />
                            <h4 className="team__events__card-container__card__h4 h4">Place</h4>
                            <p className="team__events__card-container__card__p p">
                                {event.strVenue}
                            </p>
                            <hr className="team__events__card-container__card__hr hr" />
                            <h4 className="team__events__card-container__card__h4 h4">Game Status</h4>
                            <p className="team__events__card-container__card__p p">
                                {event.strStatus}
                            </p>
                        </div>
                    </div>
                )
            })
        }

        if(_.isEmpty(selectNextTeamEvents.data.events)) {
            return <p className="team__events__no-events p">no upcoming team events found</p>
        }

        if(selectNextTeamEvents.loading) {
            return <p className="team__events__loading p">loading...</p>
        }

        if(selectNextTeamEvents.errorMsg !== "") {
            return <p>{selectNextTeamEvents.errorMsg}</p>
        }

    return <p className="team__events__no-events p">Unable to get the team's upcoming events</p>
    }

    return (
        <section className="team__events">
            <h2 className="team__events__h2 h2">Upcoming Team Events</h2>
            <button className="team__events__btn btn" onClick={handleTeamDescription} onKeyPress={handleTeamDescriptionOnPress}>
                <svg tabIndex="-1" className="team__events__indicator__plus team-icon icon">
                    <use href={iconSprites + "#icon-plus-circle"} />
                </svg>
                <svg tabIndex="-1" className="team__events__indicator__minus team-icon icon">
                    <use href={iconSprites + "#icon-minus-circle"} />
                </svg>
            </button>
            <div className="team__events__card-container">
                {showData()}
            </div>
        </section>
    )
}

export default ShowNextEvents;