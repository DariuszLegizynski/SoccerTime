import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";

import LeagueTable from "../leagueTable/leagueTable";

import _ from "lodash";
import shortid from "shortid";

import { getLeague } from "../../../actions/leagues/league/getLeague";
import NextLeagueEvents from "./nextLeagueEvents";
import PreviousLeagueEvents from "./previousLeagueEvents";

const League = (props) => {
    const leagueId = props.match.params.idLeague;
    const dispatch = useDispatch();
    const selectLeague = useSelector(state => state.league);

    useEffect (() => {
        dispatch(getLeague(leagueId));
    }, [dispatch, leagueId]);

    const showLeague = () => {
        if(!_.isEmpty(selectLeague.data)) {
            return selectLeague.data.teams.map(el => {
                return (
                    <div key={shortid.generate()}>
                        {el.strTeam}
                        {el.strAlternate}
                        <Link to={`/allTeams/${el.idTeam}`}>
                            View Team
                        </Link>
                    </div>
                )
            })
        }

        if(selectLeague.loading) {
            return <p>loading...</p>
        }

        if(selectLeague.errorMsg !== "") {
            return <p>{selectLeague.errorMsg}</p>
        }

        return <p>Unable to get the league data</p>
    }

    return (
        <div>
            <p>{props.location.state.leagueName}</p>
            <NextLeagueEvents leagueId={leagueId} />
            <Link to={"/"}>Back</Link>
            {showLeague()}
            <Link to={"/"}>Back</Link>
            <br />
            <br />
            <LeagueTable leagueId={leagueId} />
            <PreviousLeagueEvents leagueId={leagueId} />
        </div>
    )
}

export default League;