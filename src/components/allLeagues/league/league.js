import React, { useEffect, useState } from "react";
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

const League = (props) => {
    const [ newSpan, setNewSpan ] = useState(0);

    const leagueId = props.match.params.idLeague;
    const dispatch = useDispatch();
    const selectLeague = useSelector(state => state.league);
    const selectLeagueId = useSelector(state => state.leagueId.data.leagues);

    useEffect (() => {
        dispatch(getLeague(leagueId));
        dispatch(getLeagueId(leagueId));
    }, [dispatch, leagueId]);

    let imageHeight;
    
    const handleImageLoad = (event) => {
        imageHeight = event.currentTarget.clientHeight;
        console.log(imageHeight);
        if(_.isEmpty(imageHeight)) {
            // setNewSpan(Math.ceil(imageHeight / 10 + 1));
            console.log(imageHeight);
            console.log(newSpan);
        }
    }
    console.log(newSpan);
    // style={{gridRowEnd: `span ${newSpan}`}}

    const leagueIntro = () => {
        if(!_.isEmpty(selectLeagueId)) {
            return selectLeagueId.map(el => {
                return (
                    <section className="league__intro fadeIn" key={shortid.generate()}>
                        <figure className="league__intro__images">
                            <img className="league__fanart1" onLoad={handleImageLoad} src={el.strFanart1 ? el.strFanart1 + "/preview" : altFanart1} alt="Fanart1"/>
                        </figure>
                        <figure className="league__intro__images">
                            <img className="league__badge" onLoad={handleImageLoad} src={el.strBadge+"/preview"} alt="League-Badge" />
                        </figure>
                        <figure className="league__intro__images">
                            <img className="league__fanart2" onLoad={handleImageLoad} src={el.strFanart2+"/preview"} alt="Fanart2" />
                        </figure>
                        <figure className="league__intro__images">
                            <img className="league__trophy" onLoad={handleImageLoad} src={el.strTrophy} alt="Trophy" />
                        </figure>
                        <figure className="league__intro__images">
                            <img className="league__fanart3" onLoad={handleImageLoad} src={el.strFanart3+"/preview"} alt="Fanart3" />
                        </figure>
                        <figure className="league__intro__images">
                            <img className="league__logo" onLoad={handleImageLoad} src={el.strLogo+"/preview"} alt="LeagueLogo" />
                        </figure>
                        <figure className="league__intro__images">
                            <img className="league__poster" onLoad={handleImageLoad} src={el.strPoster+"/preview"} alt="Poster" />
                        </figure>
                        <figure className="league__intro__images">
                            <img className="league__fanart4"  onLoad={handleImageLoad} src={el.strFanart4+"/preview"} alt="Fanart4" />
                        </figure>
                    </section>
                )
            })
        }
    }

    const showTitle = () => {
        if(!_.isEmpty(selectLeagueId)) {
            return selectLeagueId.map(el => {
                return (
                    <section className="league__title" key={shortid.generate()}>
                        <div className="league__title">
                            <h1 className="league__h1 h1">
                                    {el.strLeague}
                            </h1>
                        </div>
                        <div className="league__banner">
                            <img className="league__banner" src={el.strBanner} alt="League-Banner" />
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