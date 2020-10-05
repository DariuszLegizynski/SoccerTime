import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";

import { getLeague } from "../../../actions/leagues/league/getLeague";

const League = (props) => {
    const leagueName = props.match.params.league;
    const dispatch = useDispatch();
    const selectLeague = useSelector(state => state.league);

    useEffect (() => {
        dispatch(getLeague(leagueName));
    }, [dispatch, leagueName]);

    console.log(selectLeague.data);

    let leagueTeamsObject = [];
    leagueTeamsObject = Object.values(selectLeague.data);
    console.log("Object.values(selectLeague.data): ", Object.values(selectLeague.data));
    console.log("leagueTeamsObject: ", leagueTeamsObject.flat());
    

    let leagueTeams = leagueTeamsObject.flat();
    console.log("leagueTeams: ", leagueTeams);
    console.log(leagueTeams.map(el => el.strTeam));

    return (
        <div>
            <p>League</p>
            <Link to={"/"}>Back</Link>
        </div>
    )
}

export default League;