import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import _ from "lodash";
import shortid from "shortid";

import { getNextLeagueEvents } from "../../../actions/leagues/league/getNextLeagueEvents";

const NextLeagueEvents = ({leagueId}) => {
    const dispatch = useDispatch();
    const selectNextLeagueEvents = useSelector (state => state.nextLeagueEvents);

    useEffect (() => {
        dispatch(getNextLeagueEvents(leagueId))
    }, [dispatch, leagueId]);

    const showData = () => {
        if(!_.isEmpty(selectNextLeagueEvents.data.events)) {
            console.log(selectNextLeagueEvents.data);
            return selectNextLeagueEvents.data.events.map(event => {
                return (
                    <div className="league__next-events__card-container" key={shortid.generate()}>
                        <div className="league__next-event__card-container__thumb">
                            <img className="league__next-event__card-container__img" src={event.strThumb + "/preview"} alt="event thumb" />
                        </div>
                        <div className="league__next-event__card-container__links">
                            <Link className="league__next-event__card-container__link link" to={`/allTeams/${event.idHomeTeam}`}>
                                {event.strHomeTeam}
                            </Link>
                            :
                            <Link className="league__next-event__card-container__link link" to={`/allTeams/${event.idAwayTeam}`}>
                                {event.strAwayTeam}
                            </Link>
                        </div>
                        <div className="league__next-event__card-container__info">
                            <h4 className="league__next-event__card-container__h4 h4">Date</h4>
                                <p className="league__next-event__card-container__p p">
                                    {event.dateEvent}
                                </p>
                            <h4 className="league__next-event__card-container__h4 h4">Time</h4>
                                <p className="league__next-event__card-container__p p">
                                    {event.strTime}
                                </p>
                            <h4 className="league__next-event__card-container__h4 h4">Where?</h4>
                                <p className="league__next-event__card-container__p p">
                                    {event.strVenue}
                                </p>
                            <h4 className="league__next-event__card-container__h4 h4">Game Status</h4>
                                <p className="league__next-event__card-container__p p">
                                    {event.strStatus}
                                </p>
                        </div>
                    </div>
                )
            })
        }

        if(_.isEmpty(selectNextLeagueEvents.data.events)) {
            return <p>no upcoming league events found</p>
        }

        if(selectNextLeagueEvents.loading) {
            return <p>loading...</p>
        }

        if(selectNextLeagueEvents.errorMsg !== "") {
            return <p>{selectNextLeagueEvents.errorMsg}</p>
        }

    return <p>Unable to get the league's upcoming events</p>
    }

    return(
        <section className="league__next-events">
            <h2>Upcoming League Events</h2>
            {showData()}
        </section>
    )
}

export default NextLeagueEvents;