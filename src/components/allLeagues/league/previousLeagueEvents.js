import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import _ from "lodash";
import shortid from "shortid";

import { getPreviousLeagueEvents } from "../../../actions/leagues/league/getPreviousLeagueEvents";

import "./league.css";
import iconSprites from "../../../resources/icons/icomoon/sprite.svg";
import altBackgroundEvent from "../../../resources/images/alt/training-1306131.jpg";

const PreviousLeagueEvents = ({leagueId}) => {
    const dispatch = useDispatch();
    const selectPreviousLeagueEvents = useSelector (state => state.previousLeagueEvents);

    useEffect (() => {
        dispatch(getPreviousLeagueEvents(leagueId))
    }, [dispatch, leagueId]);

        // Toggles visiblity of previous league's events
	const handleNextTeamEventsButton = () => {
        document.querySelector(".league__previous__card-container").classList.toggle("league__previous__card-container__hide");
        document.querySelector(".league__previous__indicator__plus").classList.toggle("league__previous__indicator__plus__show");
        document.querySelector(".league__previous__indicator__minus").classList.toggle("league__previous__indicator__minus__hide");
	}
  
	  // when "enter" is pressed
	  const handleNextTeamEventsButtonOnPress = (event) => {
		  if (event.key) {
              document.querySelector(".league__previous__card-container").classList.toggle("league__previous__card-container__hide");
              document.querySelector(".league__previous__indicator__plus").classList.toggle("league__previous__indicator__plus__show");
              document.querySelector(".league__previous__indicator__minus").classList.toggle("league__previous__indicator__minus__hide");
		  }
	  }

    const showData = () => {
        if(!_.isEmpty(selectPreviousLeagueEvents.data.events)) {
            return selectPreviousLeagueEvents.data.events.map(event => {
                return (
                    <div className="league__previous__card-container__card card__previous" key={shortid.generate()}>
                        <div className="league__previous__card-container__card__thumb">
                            <img className="league__previous__card-container__card__img" src={event.strThumb ? event.strThumb + "/preview" : altBackgroundEvent} alt="event thumb" />
                        </div>
                        <div className="league__previous__card-container__card__links">
                            <Link className="league__previous__card-container__card__links__link link--home-team link" to={`/allTeams/${event.idHomeTeam}`}>
                                <p className="league__previous__card-container__card__links__p p">
                                    {event.strHomeTeam}
                                </p>
                            </Link>
                            <p className="league__previous__card-container__card__links__p p">
                                {event.intHomeScore}
                                :
                                {event.intAwayScore}
                            </p>
                            <Link className="league__previous__card-container__card__links__link link--away-team link" to={`/allTeams/${event.idAwayTeam}`}>
                                <p className="league__previous__card-container__card__links__p p">
                                    {event.strAwayTeam}
                                </p>
                            </Link>
                        </div>
                        <div className="league__previous__card-container__card__info">
                            <h4 className="league__previous__card-container__card__h4 h4">Date</h4>
                            <p className="league__previous__card-container__card__p p">
                                {event.dateEvent}
                            </p>
                            <hr className="league__previous__card-container__card__hr hr" />
                            <h4 className="league__previous__card-container__card__h4 h4">Place</h4>
                            <p className="league__previous__card-container__card__p p">
                                {event.strVenue}
                            </p>
                            <hr className="league__previous__card-container__card__hr hr" />
                            <h4 className="league__previous__card-container__card__h4 h4">Spectators</h4>
                            <p className="league__previous__card-container__card__p p">
                                {event.intSpectators ? event.intSpectators : "0"}
                            </p>
                            <hr className="league__previous__card-container__card__hr hr" />
                            <h4 className="league__previous__card-container__card__h4 h4">Game Status</h4>
                            <p className="league__previous__card-container__card__p p">
                                {event.strStatus}
                            </p>
                        </div>
                        <div className="league__previous__card-container__card__video">
                            <iframe className="league__previous__card-container__card__video__iframe" title={event.strEvent} src={event.strVideo ? event.strVideo.replace("watch?v=", "embed/") : "about:blank"} allowFullScreen />
                        </div>
                    </div>
                )
            })
        }

        if(_.isEmpty(selectPreviousLeagueEvents.data.events)) {
            return <p className="league__previous__no-events p">no past league's events found</p>
        }

        if(selectPreviousLeagueEvents.loading) {
            return <p className="league__previous__loading p">loading...</p>
        }

        if(selectPreviousLeagueEvents.errorMsg !== "") {
            return <p>{selectPreviousLeagueEvents.errorMsg}</p>
        }

    return <p className="league__previous__no-events p">Unable to get the league's past events</p>
    }

    return(
        <section className="league__previous">
            <h2 className="league__previous__h2 h2">Past League Events</h2>
            <button className="league__previous__btn btn" onClick={handleNextTeamEventsButton} onKeyPress={handleNextTeamEventsButtonOnPress}>
                <svg className="league__previous__indicator__plus team-icon icon">
                    <use href={iconSprites + "#icon-plus-circle"} />
                </svg>
                <svg className="league__previous__indicator__minus team-icon icon">
                    <use href={iconSprites + "#icon-minus-circle"} />
                </svg>
            </button>
            <div className="league__previous__card-container">
                {showData()}
            </div>
        </section>
    )
}

export default PreviousLeagueEvents;