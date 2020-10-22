import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import _ from "lodash";
import shortid from "shortid";

import { getPreviousTeamEvents } from "../../actions/team/getPreviousTeamEvents";

const ShowPreviousEvents = ({idTeam}) => {
    const dispatch = useDispatch();

    const selectPreviousTeamEvents = useSelector(state => state.previousTeamEvents);

    useEffect (() => {
        dispatch(getPreviousTeamEvents(idTeam))
    }, [dispatch, idTeam]);

    const showData = () => {
        if(!_.isEmpty(selectPreviousTeamEvents.data.results)) {
            return selectPreviousTeamEvents.data.results.map(event => {
                return (
                    <div key={shortid.generate()}>
                        <p>Next Matches:</p>
                        <Link to={`/allTeams/${event.idHomeTeam}`}>
                            {event.strHomeTeam}
                        </Link>
                        {event.intHomeScore}
                        :
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

        if(_.isEmpty(selectPreviousTeamEvents.data.events)) {
            return <p>no past team events found</p>
        }

        if(selectPreviousTeamEvents.loading) {
            return <p>loading...</p>
        }

        if(selectPreviousTeamEvents.errorMsg !== "") {
            return <p>{selectPreviousTeamEvents.errorMsg}</p>
        }

    return <p>Unable to get the team's previous events</p>
    }

    return (
        <div>
            <h4>Last Team Events:</h4>
            {showData()}
        </div>
    )
}

export default ShowPreviousEvents;