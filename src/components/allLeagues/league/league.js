import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";

import LeagueTable from "../leagueTable/leagueTable";

import _ from "lodash";
import shortid from "shortid";

import { getLeague } from "../../../actions/leagues/league/getLeague";
import { getLeagueId } from "../../../actions/leagues/league/getLeagueId";
import { getFavoritedTeams } from "../../../actions/favorites/getFavoritedTeams";
import NextLeagueEvents from "./nextLeagueEvents";
import PreviousLeagueEvents from "./previousLeagueEvents";

const League = (props) => {
    const leagueId = props.match.params.idLeague;
    const dispatch = useDispatch();
    const selectLeague = useSelector(state => state.league);
    const selectLeagueId = useSelector(state => state.leagueId.data.leagues);

    useEffect (() => {
        dispatch(getLeague(leagueId));
        dispatch(getLeagueId(leagueId));
    }, [dispatch, leagueId]);

    const showLeagueName = () => {
        if(!_.isEmpty(selectLeagueId)) {
            return selectLeagueId.map(el => {
                return (
                    <div key={shortid.generate()}>
                        <p>{el.strLeague}</p>
                        <img src={el.strLogo+"/preview"} alt="LeagueLogo" />
                    </div>
                )
            })
        }
    }

    const showLeagueDescription = () => {
        if(!_.isEmpty(selectLeagueId)){
            return selectLeagueId.map(el => {
                return (
                    <div key={shortid.generate()}>
                        <img src={el.strBadge+"/preview"} alt="League Badge" />
                        <img src={el.strBanner} alt="League Banner" />
                        <p>{el.Country}</p>
                        <p>{el.strDescritpionEN}</p>
                        <p>{el.strFacebook}</p>
                        <img src={el.strFanart1+"/preview"} alt="Fanart1" />
                        <img src={el.strFanart2+"/preview"} alt="Fanart2" />
                        <img src={el.strFanart3+"/preview"} alt="Fanart3" />
                        <img src={el.strFanart4+"/preview"} alt="Fanart4" />
                        <img src={el.strPoster+"/preview"} alt="Poster" />
                        <p>{el.strRSS}</p>
                        <img src={el.strTrophy+"/preview"} alt="Trophy" />
                        <p>{el.strTwitter}</p>
                        <p>{el.strWebsite}</p>
                        <p>{el.strYoutube}</p>
                    </div>
                )
            });
        }
    }

    const showLeague = () => {
        if(!_.isEmpty(selectLeague.data)) {
            return selectLeague.data.teams.map(el => {
                return (
                    <div key={shortid.generate()}>
                        <button onClick={() => dispatch(getFavoritedTeams(el.strTeam, el.idTeamel.strTeamBadge+"/preview"))}>favorite</button>
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
            {showLeagueName()}
            {showLeagueDescription()}
            <NextLeagueEvents leagueId={leagueId} />
            <Link to={"/"}>Back</Link>
            {showLeague()}
            <Link to={"/"}>Back</Link>
            <br />
            <br />
            <LeagueTable leagueId={leagueId} />
            <PreviousLeagueEvents leagueId={leagueId} />
            <Link to={"/"}>Back</Link>
        </div>
    )
}

export default League;