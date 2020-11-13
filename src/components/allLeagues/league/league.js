import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import LeagueTable from "../leagueTable/leagueTable";

import _ from "lodash";
import shortid from "shortid";

import { getLeague } from "../../../actions/leagues/league/getLeague";
import { getLeagueId } from "../../../actions/leagues/league/getLeagueId";
import { getFavoritedTeams } from "../../../actions/favorites/getFavoritedTeams";
import NextLeagueEvents from "./nextLeagueEvents";
import PreviousLeagueEvents from "./previousLeagueEvents";

import altFanart1 from "../../../resources/images/hero/training-1306131.jpg";
import "./league.css";
import LeagueItem from "./LeagueItem";

const League = (props) => {
    const leagueId = props.match.params.idLeague;
    const dispatch = useDispatch();
    const selectLeague = useSelector(state => state.league);
    const selectLeagueId = useSelector(state => state.leagueId.data.leagues);

    useEffect (() => {
        dispatch(getLeague(leagueId));
        dispatch(getLeagueId(leagueId));
    }, [dispatch, leagueId]);

    const leagueIntro = () => {
        if(!_.isEmpty(selectLeagueId)) {
            return selectLeagueId.map(el => {
                return (
                    <section className="league__gallery fadeIn" key={shortid.generate()}>
                        <LeagueItem picture={el.strLogo} altPicture={altFanart1} altText={"Logo"} />
                        <LeagueItem picture={el.strFanart2} altPicture={altFanart1} altText={"Fanart2"} />
                        <LeagueItem picture={el.strBadge} altPicture={altFanart1} altText={"Badge"} />
                        <LeagueItem picture={el.strFanart3} altPicture={altFanart1} altText={"Fanart3"} />
                        <LeagueItem picture={el.strTrophy} altPicture={altFanart1} altText={"Trophy"} />
                        <LeagueItem picture={el.strFanart1} altPicture={altFanart1} altText={"Fanart1"} />
                        <LeagueItem picture={el.strPoster} altPicture={altFanart1} altText={"Poster"} />
                        <LeagueItem picture={el.strFanart4} altPicture={altFanart1} altText={"Fanart4"} />
                    </section>
                )
            })
        }
    }

    const showTitle = () => {
        if(!_.isEmpty(selectLeagueId)) {
            return selectLeagueId.map(el => {
                return (
                    <section className="league__header" key={shortid.generate()}>
                        <div className="league__header__title">
                            <h1 className="league__header__title__h1 h1">
                                    {el.strLeague}
                            </h1>
                        </div>
                        <div className="league__header__banner">
                            <img className="league__header__banner__image" src={el.strBanner} alt="League-Banner" />
                        </div>
                    </section>
                )
            })
        }
    }

    const showLeagueDescription = () => {
        if(!_.isEmpty(selectLeagueId)){
            return selectLeagueId.map(el => {
                return (
                    <div className="league__info" key={shortid.generate()}>
                        <p>{el.Country}</p>
                        <p className="league__descriptionEN">{el.strDescritpionEN}</p>
                        <p className="league__facebook">{el.strFacebook}</p>
                        <p className="league__rss" >{el.strRSS}</p>
                        <p className="league__twitter">{el.strTwitter}</p>
                        <p className="league__webpage">{el.strWebsite}</p>
                        <p className="league__youtube">{el.strYoutube}</p>
                    </div>
                )
            });
        }
    }

    const showLeague = () => {
        if(!_.isEmpty(selectLeague.data)) {
            return selectLeague.data.teams.map(el => {
                return (
                    <div className="league__team" key={shortid.generate()}>
                        <button className="league__btn btn" onClick={() => dispatch(getFavoritedTeams(el.strTeam, el.idTeamel.strTeamBadge+"/preview"))}>
                            favorite
                        </button>
                        <p className="league__team-name">{el.strTeam}</p>
                        <p className="league__team-alt-name">{el.strAlternate}</p>
                        <Link className="league__link link" to={`/allTeams/${el.idTeam}`}>
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
        <div className="league">
            {leagueIntro()}
            {showTitle()}
            {showLeagueDescription()}
            <NextLeagueEvents leagueId={leagueId} />
            <Link className="sign__link link" to={"/"}>&#8592; Back</Link>
            {showLeague()}
            <Link to={"/"}>Back</Link>
            <LeagueTable leagueId={leagueId} />
            {/* <PreviousLeagueEvents leagueId={leagueId} /> */}
            <Link className="sign__link link" to={"/"}>&#8592; Back</Link>
        </div>
    )
}

export default League;