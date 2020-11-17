import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";

import _ from "lodash";
import shortid from "shortid";

import { getTableLookup } from "../../../actions/leagues/tableLookup/getTableLookup";

const LeagueTable = ({leagueId}) => {
    const dispatch = useDispatch();
    const selectLeagueId = useSelector (state => state.tableLeague);

    useEffect (() => {
        dispatch(getTableLookup(leagueId))
    }, [dispatch, leagueId]);

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
        <section className="league__league-table">
            <h2>League's Table & results</h2>
            <h3>Season 2019 - 2020</h3>
            <Link to={"/"}>Back</Link>
            {showLeagueTable()}
            <Link to={"/"}>Back</Link>
        </section>
    )
}

export default LeagueTable;