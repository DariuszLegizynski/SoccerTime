import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";

import _ from "lodash";
import shortid from "shortid";

import { getLeague } from "../../../actions/leagues/league/getLeague";

const League = (props) => {
    const leagueName = props.match.params.league;
    const dispatch = useDispatch();
    const selectLeague = useSelector(state => state.league);

    useEffect (() => {
        dispatch(getLeague(leagueName));
    }, [dispatch, leagueName]);

    const showLeague = () => {
        if(!_.isEmpty(selectLeague.data)) {
            return selectLeague.data.teams.map(el => {
                return (
                    <div key={shortid.generate()}>
                        {el.strTeam}
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