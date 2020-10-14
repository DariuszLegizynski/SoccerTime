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
        if(!_.isEmpty(selectNextLeagueEvents.data)) {
            return selectNextLeagueEvents.data.events.map(event => {
                return (
                    <div key={shortid.generate()}>
                        <p>Next Match:</p>
                        <Link to={`/allTeams/${event.idHomeTeam}`}>
                            {event.strHomeTeam}
                        </Link>
                        :
                        <Link to={`/allTeams/${event.idAwayTeam}`}>
                            {event.strAwayTeam}
                        </Link>
                        <p>Date:</p>
                        {event.dateEvent} 
                        at {event.strTime}
                        <p>Where?</p>
                        {event.strVenue}
                        <p>Has the game begon?</p>
                        {event.strStatus}
                        <p>Season</p>
                        {event.strSeason}
                        <p>League:</p>
                        {event.strLeague}
                    </div>
                )
            })
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
        <div>
            <h2>Upcoming League Events</h2>
            {showData()}
        </div>
    )
}

export default NextLeagueEvents;