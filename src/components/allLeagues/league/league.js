import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";

import _ from "lodash";
import shortid from "shortid";

import { getLeague } from "../../../actions/leagues/league/getLeague";
import { getTableLookup } from "../../../actions/leagues/tableLookup/getTableLookup";

const League = (props) => {
    const leagueName = props.match.params.league;
    const leagueId = props.match.params.idLeague;
    const dispatch = useDispatch();
    const selectLeague = useSelector(state => state.league);
    const selectLeagueId = useSelector(state => state.tableLeague)

    useEffect (() => {
        dispatch(getLeague(leagueName));
    }, [dispatch, leagueName]);

    useEffect (() => {
        dispatch(getTableLookup(leagueId))
    }, [dispatch, leagueId]);

    if(!_.isEmpty(selectLeagueId.data)){
        console.log(selectLeagueId.data);
        console.log(selectLeagueId.data.map(el => el.name));
    }

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
            <p>{leagueName}</p>
            {showLeague()}
            <Link to={"/"}>Back</Link>
        </div>
    )
}

export default League;