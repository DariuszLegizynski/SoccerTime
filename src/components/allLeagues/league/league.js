import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";

import _ from "lodash";
import shortid from "shortid";

import { getLeague } from "../../../actions/leagues/league/getLeague";
import { getTableLookup } from "../../../actions/leagues/tableLookup/getTableLookup";

const League = (props) => {
    const leagueId = props.match.params.idLeague;
    const dispatch = useDispatch();
    const selectLeague = useSelector(state => state.league);
    const selectLeagueId = useSelector(state => state.tableLeague)

    useEffect (() => {
        dispatch(getLeague(leagueId));
    }, [dispatch, leagueId]);

    useEffect (() => {
        dispatch(getTableLookup(leagueId))
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

    const showLeagueTable = () => {
        if(!_.isEmpty(selectLeagueId.data)) {
            return selectLeagueId.data.map(el => {
                return (
                    <div key={shortid.generate()}>
                        <p>Team</p>
                        <Link to={`/allTeams/${el.teamid}`}>
                            {el.name}
                        </Link>
                        <p>Total Games</p>
                        {el.played}
                        <p>Wins</p>
                        {el.win}
                        <p>Draws</p>
                        {el.draw}
                        <p>Losses</p>
                        {el.loss}
                        <p>Goals +</p>
                        {el.goalsfor}
                        <p>Goals -</p>
                        {el.goalsagainst}
                        <p>Goals Difference</p>
                        {el.goalsdifference}
                        <p>Points</p>
                        {el.total}
                    </div>
                )
            })
        }

        if(selectLeagueId.loading) {
            return <p>loading...</p>
        }

        if(selectLeagueId.errorMsg !== "") {
            return <p>{selectLeagueId.errorMsg}</p>
        }

        return <p>No League Table data found</p>
    }

    return (
        <div>
            <p>TODO: leagueName</p>
            <Link to={"/"}>Back</Link>
            {showLeague()}
            <Link to={"/"}>Back</Link>
            <br />
            <br />
            <h2>League's Table & results</h2>
            <h3>Season 2019 - 2020</h3>
            <Link to={"/"}>Back</Link>
            {showLeagueTable()}
            <Link to={"/"}>Back</Link>
        </div>
    )
}

export default League;