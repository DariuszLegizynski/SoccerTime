import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import _ from "lodash";
import shortid from "shortid";

import { getNextLeagueEvents } from "../../../actions/leagues/league/getNextLeagueEvents";

import "./league.css";
import iconSprites from "../../../resources/icons/icomoon/sprite.svg";
import altBackgroundEvent from "../../../resources/images/alt/training-1306131.jpg";

const NextLeagueEvents = ({leagueId}) => {
    const dispatch = useDispatch();
    const selectNextLeagueEvents = useSelector (state => state.nextLeagueEvents);

    useEffect (() => {
        dispatch(getNextLeagueEvents(leagueId))
    }, [dispatch, leagueId]);

    // Toggles visiblity of next league's events
	const handleNextTeamEventsButton = () => {
        document.querySelector(".league__events__card-container").classList.toggle("league__events__card-container__hide");
        document.querySelector(".league__events__indicator__plus").classList.toggle("league__events__indicator__plus__show");
        document.querySelector(".league__events__indicator__minus").classList.toggle("league__events__indicator__minus__hide");
	}
  
	  // when "enter" is pressed
	  const handleNextTeamEventsButtonOnPress = (event) => {
		  if (event.key) {
              document.querySelector(".league__events__card-container").classList.toggle("league__events__card-container__hide");
              document.querySelector(".league__events__indicator__plus").classList.toggle("league__events__indicator__plus__show");
              document.querySelector(".league__events__indicator__minus").classList.toggle("league__events__indicator__minus__hide");
		  }
	  }

    const showData = () => {
        if(!_.isEmpty(selectNextLeagueEvents.data.events)) {
            return selectNextLeagueEvents.data.events.map(event => {
                return (
                    <div className="league__events__card-container__card" key={shortid.generate()}>
                        <div className="league__events__card-container__card__thumb">
                            <img className="league__events__card-container__card__img" src={event.strThumb ? event.strThumb + "/preview" : altBackgroundEvent} alt="event thumb" />
                        </div>
                        <div className="league__events__card-container__card__links">
                            <Link className="league__events__card-container__card__links__link link--home-team link" to={`/allTeams/${event.idHomeTeam}`}>
                                <p className="league__events__card-container__card__links__p p">
                                    {event.strHomeTeam}
                                </p>
                            </Link>
                            <p className="league__events__card-container__card__links__p p">
                                :
                            </p>
                            <Link className="league__events__card-container__card__links__link link--away-team link" to={`/allTeams/${event.idAwayTeam}`}>
                                <p className="league__events__card-container__card__links__p p">
                                    {event.strAwayTeam}
                                </p>
                            </Link>
                        </div>
                        <div className="league__events__card-container__card__info">
                            <h4 className="league__events__card-container__card__h4 h4">Date</h4>
                            <p className="league__events__card-container__card__p p">
                                {event.dateEvent}
                            </p>
                            <hr className="league__events__card-container__card__hr hr" />
                            <h4 className="league__events__card-container__card__h4 h4">Time</h4>
                            <p className="league__events__card-container__card__p p">
                                {event.strTime}
                            </p>
                            <hr className="league__events__card-container__card__hr hr" />
                            <h4 className="league__events__card-container__card__h4 h4">Place</h4>
                            <p className="league__events__card-container__card__p p">
                                {event.strVenue}
                            </p>
                            <hr className="league__events__card-container__card__hr hr" />
                            <h4 className="league__events__card-container__card__h4 h4">Game Status</h4>
                            <p className="league__events__card-container__card__p p">
                                {event.strStatus}
                            </p>
                        </div>
                    </div>
                )
            })
        }

        //red braces becouse of the "(" at the end of the line with <p></p>
        if(_.isEmpty(selectNextLeagueEvents.data.events)) {
            return <p className="league__events__no-events p">API Endpoint changed: no upcoming league events found</p>
        }

        if(selectNextLeagueEvents.loading) {
            return <p className="league__events__loading p">loading...</p>
        }

        if(selectNextLeagueEvents.errorMsg !== "") {
            return <p>{selectNextLeagueEvents.errorMsg}</p>
        }

    return <p className="league__events__no-events p">Unable to get the league's upcoming events</p>
    }

    return(
        <section className="league__events">
            <h2 className="league__events__h2 h2">Upcoming League Events</h2>
            <button className="league__events__btn btn" onClick={handleNextTeamEventsButton} onKeyPress={handleNextTeamEventsButtonOnPress}>
                <svg className="league__events__indicator__plus team-icon icon">
                    <use href={iconSprites + "#icon-plus-circle"} />
                </svg>
                <svg className="league__events__indicator__minus team-icon icon">
                    <use href={iconSprites + "#icon-minus-circle"} />
                </svg>
            </button>
            <div className="league__events__card-container">
                {showData()}
            </div>
        </section>
    )
}

export default NextLeagueEvents;