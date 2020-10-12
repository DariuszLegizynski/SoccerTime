import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import _ from "lodash";
import shortid from "shortid";

import { getNextTeamEvents } from "../../actions/team/getNextTeamEvents";

const ShowNextEvents = ({idTeam}) => {
    const dispatch = useDispatch();
    const selectNextTeamEvents = useSelector (state => state.nextTeamEvents);


    useEffect (() => {
        dispatch(getNextTeamEvents(idTeam))
    }, [dispatch, idTeam]);

    const showData = () => {
        if(!_.isEmpty(selectNextTeamEvents.data)) {
            return selectNextTeamEvents.data.events.map(event => {
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

        if(selectNextTeamEvents.loading) {
            return <p>loading...</p>
        }

        if(selectNextTeamEvents.errorMsg !== "") {
            return <p>{selectNextTeamEvents.errorMsg}</p>
        }

    return <p>Unable to get the team's upcoming events</p>
    }

    return (
        <div>
            <h2>Upcoming Team Events:</h2>
            {showData()}
        </div>
    )
}

export default ShowNextEvents;