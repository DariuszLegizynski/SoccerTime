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

import iconSprites from "../../../resources/icons/icomoon/sprite.svg";
import altTeamBadge from "../../../resources/images/hero/soccer-4598714.jpg"
import altFanart1 from "../../../resources/images/alt/training-1306131.jpg";
import altFanart2 from "../../../resources/images/alt/audience-1866738.jpg";
import altFanart3 from "../../../resources/images/alt/football-3471402.jpg";
import altFanart4 from "../../../resources/images/alt/jimmy-conover-SEQ2VI0KI6A-unsplash.jpg";
import altFanart5 from "../../../resources/images/alt/liam-mckay-XcvAfCgYX0Y-unsplash.jpg";
import altFanart6 from "../../../resources/images/alt/stadium-931975.jpg";
import altFanart7 from "../../../resources/images/alt/soccer-1490541.jpg";
import altFanart8 from "../../../resources/images/alt/soccer-players-1478802.jpg";

import "./league.css";
import TeamBadge from "./TeamBadge";

const League = (props) => {
	const leagueId = props.match.params.idLeague;
	const dispatch = useDispatch();
	const selectLeague = useSelector (state => state.league);
	const selectLeagueId = useSelector(state => state.leagueId.data.leagues);

	useEffect(() => {
		dispatch(getLeague(leagueId));
		dispatch(getLeagueId(leagueId));
	}, [dispatch, leagueId]);

	// Toggles visiblity of share bar
	const handleShareButton = () => {
	  document.querySelector(".league__intro__share").classList.toggle("league__intro__share__hide");
	  document.querySelector(".league__intro__share__link").toggleAttribute("tabIndex", "0");
	}

	// when "enter" is pressed
	const handleShareButtonOnPress = (event) => {
		if (event.key === "Enter") {
			document.querySelector(".league__intro__share").classList.toggle("league__intro__share__hide");
			document.querySelector(".league__intro__share__link").toggleAttribute("tabIndex");
		}
	  }

	const leagueIntro = () => {
		if (!_.isEmpty(selectLeagueId)) {
			return selectLeagueId.map(el => {
					return (
						<section className="league__intro fadeIn" key={shortid.generate()}>
							<figure className="league__intro__image" style={{
								background: `linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(0,0,0,0.45) 92%) center center no-repeat, #fff
								url(${el.strFanart2 ? el.strFanart2 : altFanart2})
								center top no-repeat`}}
								>
								<div className="league__intro__navigation">
									<Link to={"/"} className="league__intro__navigation__link link">
										<button className="league__intro__navigation__btn btn" tabIndex="-1">
											<svg tabIndex="-1" className="league__intro__navigation__icon--back icon fadeInFromLeft">
												<use href={iconSprites + "#icon-back"} />
											</svg>
										</button>
									</Link>
									<svg tabIndex="-1" onClick={handleShareButton} onKeyPress={handleShareButtonOnPress} className="league__intro__navigation__icon--share icon fadeInFromRight">
										<use href={iconSprites + "#icon-share2"} />
									</svg>
								</div>
								{ /* Share bar */ }
								<div className="league__intro__share league__intro__share__hide">
									<a className="league__intro__share__link share-link--mail fadeInFromTop" onClick={handleShareButton} onKeyPress={handleShareButtonOnPress} href={`mailto:?Subject=Look%20what%20I%20found%20on%20the%20web!&Body=I%20saw%20this%20and%20thought%20of%20you!%20 ${"www.mySoccer-time.com/allLeagues/" + el.idLeague}`}>
										<svg className="league__intro__share__icon icon ">
											<use href={iconSprites + "#icon-envelope-o"} />
										</svg>
									</a>
									<a className="league__intro__share__link share-link--facebook fadeInFromTop" onClick={handleShareButton} onKeyPress={handleShareButtonOnPress} href={`http://www.facebook.com/sharer.php?u=${"www.mySoccer-time.com/allLeagues/" + el.idLeague}`} rel="noopener noreferrer" target="_blank">
										<svg className="league__intro__share__icon icon">
											<use href={iconSprites + "#icon-facebook2"} />
										</svg>
									</a>
									<a className="league__intro__share__link share-link--twitter fadeInFromTop" onClick={handleShareButton} onKeyPress={handleShareButtonOnPress} href={`https://twitter.com/share?url=${"www.mySoccer-time.com/allLeagues/" + el.idLeague}`} rel="noopener noreferrer" target="_blank">
										<svg className="league__intro__share__icon icon">
											<use href={iconSprites + "#icon-twitter"} />
										</svg>
									</a>
								</div>
								<div className="league__intro__header__title">
									<h1 className="league__intro__header__title__h1 h1">
										{ el.strLeague }
									</h1>
								</div>
								<div className="league__intro__header__banner">
									<img className="league__intro__header__banner__image" src={ el.strBadge + "/preview" } alt="League-Banner"/>
								</div>
							</figure>
						</section>
					);
				}
			);
		}
	}

	const showTeamsBadge = () => {
		if(!_.isEmpty(selectLeague.data)) {
			return selectLeague.data.teams.map(el => {
				return (
					<TeamBadge teamBadge={el.strTeamBadge} teamId={el.idTeam} key={shortid.generate()}/>
				)
			})
		}
	}

	const showLeagueDescription = () => {
		if (!_.isEmpty(selectLeagueId)) {
			return selectLeagueId.map(el => {
					return (
						<section className="league__info" key={shortid.generate()}>
							<div className="league__info__description">
								<h2 className="league__info__description__h2 h2">
									Description
								</h2>
								<p className="league__info__description__p p">
									{ el.strDescriptionEN }
								</p>
							</div>
							<div className="league__info__media">
								<a className="league__info__media__link share-link--webpage fadeInFromTop"  href={"https://" + el.strWebsite} rel="noopener noreferrer" target="_blank">
									<svg className="league__info__media__icon icon">
										<use href={iconSprites + "#icon-earth"} />
									</svg>
								</a>
								<a className="league__info__media__link share-link--rss fadeInFromTop"  href={el.strRSS} rel="noopener noreferrer" target="_blank">
									<svg className="league__info__media__icon icon">
										<use href={iconSprites + "#icon-rss2"} />
									</svg>
								</a>
								<a className="league__info__media__link share-link--youtube fadeInFromTop"  href={"https://" + el.strYoutube} rel="noopener noreferrer" target="_blank">
									<svg className="league__info__media__icon icon">
										<use href={iconSprites + "#icon-youtube"} />
									</svg>
								</a>
								<a className="league__info__media__link share-link--twitter fadeInFromTop"  href={"https://" + el.strTwitter} rel="noopener noreferrer" target="_blank">
									<svg className="league__info__media__icon icon">
										<use href={iconSprites + "#icon-twitter"} />
									</svg>
								</a>
								<a className="league__info__media__link share-link--facebook fadeInFromTop" href={"https://" + el.strFacebook} rel="noopener noreferrer" target="_blank">
									<svg className="league__info__media__icon icon">
										<use href={iconSprites + "#icon-facebook2"} />
									</svg>
								</a>
							</div>
						</section>
					);
				}
			);
		}
	};

	const showLeagueTeams = () => {
		if (!_.isEmpty(selectLeague.data)) {
			return selectLeague.data.teams.map(
				(el) => {
					return (
						<div className="league__team-short-description__card" key={shortid.generate()}>
							<Link className="league__team-short-description__card__link link" to={`/allTeams/${el.idTeam}`}>
								<div className="league__team-short-description__card__link__info">
									<img className="league__team-short-description__card__link__info__team-badge" src={el.strTeamBadge ? el.strTeamBadge + "/preview" : altTeamBadge} alt="team-badge" /> 
									<h2 className="league__team-short-description__card__link__info__team-name">
										{ el.strTeam }
									</h2>
								</div>
							</Link>
							<button className="league__team-short-description__card__btn btn" onClick={() => dispatch(
								getFavoritedTeams(
											el.strTeam,
											el.idTeame,
											el.strTeamBadge + "/preview"
										)
									)}>
								<svg className="league__team-short-description__card__icon icon">
									<use href={iconSprites + "#icon-soccer"} />
								</svg>
							</button>
						</div>
					);
				}
			);
		}

		if (selectLeague.loading) {
			return <p>loading...</p>;
		}

		if (selectLeague.errorMsg !== "") {
			return (
				<p>
					{selectLeague.errorMsg}
				</p>
			);
		}

		return (
			<p>
				Unable to get the league data
			</p>
		);
	};

	return (
		<div className="league">
			{leagueIntro()}
			<section className="league__team-badge">
				{showTeamsBadge()}
			</section>
			{showLeagueDescription()}
			<hr className="hr" />
			<NextLeagueEvents leagueId={leagueId}/>
			<section className="league__team-short-description">
				{showLeagueTeams()}
			</section>
			<LeagueTable leagueId={leagueId}/>
			<PreviousLeagueEvents leagueId={leagueId} />
			<Link to={"/"} className="league__intro__navigation__link link">
				<button className="league__intro__navigation__btn btn" tabIndex="-1">
					<svg tabIndex="-1" className="league__intro__navigation__icon--back icon fadeInFromLeft">
						<use href={iconSprites + "#icon-back"} />
					</svg>
				</button>
			</Link>
		</div>
	);
};

export default League;
