import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import _ from "lodash";
import shortid from "shortid";

import { getPreviousLeagueEvents } from "../../../actions/leagues/league/getPreviousLeagueEvents";

const PreviousLeagueEvents = ({leagueId}) => {

    const dispatch = useDispatch();
    const selectPreviousLeagueEvents = useSelector (state => state.previousLeagueEvents);

    useEffect (() => {
        dispatch(getPreviousLeagueEvents(leagueId))
    }, [dispatch, leagueId]);

    const showData = () => {
        if(!_.isEmpty(selectPreviousLeagueEvents.data)) {
            return selectPreviousLeagueEvents.data.events.map(event => {
                return (
                    <div key={shortid.generate()}>
                        <p>Last Matches:</p>
                        <Link to={`/allTeams/${event.idHomeTeam}`}>
                            {event.strHomeTeam}
                        </Link>
                        {event.intHomeScore} :
                        {event.intAwayScore}
                        <Link to={`/allTeams/${event.idAwayTeam}`}>
                            {event.strAwayTeam}
                        </Link>
                        <img src={event.strThumb + "/preview"} alt="game thumb" />
                        <p>Date:</p>
                        {event.dateEvent} 
                        at {event.strTime}
                        <p>Description</p>
                        {event.strDescriptionEN}
                        <p>Where?</p>
                        {event.strVenue}
                        {event.strCountry}
                        <p>Spectators</p>
                        {event.intSpectators}
                        <p>Has the game begon?</p>
                        {event.strStatus}
                        <p>Season</p>
                        {event.strSeason}
                        <p>League:</p>
                        {event.strLeague}
                        <p>Video</p>
                        <p>TODO: show message if video not there</p>
                        <iframe title={event.strEvent} src={event.strVideo ? event.strVideo.replace("watch?v=", "embed/") : "about:blank"} allowFullScreen />
                    </div>
                )
            })
        }

        if(selectPreviousLeagueEvents.loading) {
            return <p>loading...</p>
        }

        if(selectPreviousLeagueEvents.errorMsg !== "") {
            return <p>{selectPreviousLeagueEvents.errorMsg}</p>
        }

    return <p>Unable to get the league's past events</p>
    }

    return(
        <div>
            <h2>Last League Events</h2>
            {showData()}
        </div>
    )
}

export default PreviousLeagueEvents;