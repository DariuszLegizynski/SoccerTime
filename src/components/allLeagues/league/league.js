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
import altFanart1 from "../../../resources/images/alt/training-1306131.jpg";
import altFanart2 from "../../../resources/images/alt/audience-1866738.jpg";
import altFanart3 from "../../../resources/images/alt/football-3471402.jpg";
import altFanart4 from "../../../resources/images/alt/jimmy-conover-SEQ2VI0KI6A-unsplash.jpg";
import altFanart5 from "../../../resources/images/alt/liam-mckay-XcvAfCgYX0Y-unsplash.jpg";
import altFanart6 from "../../../resources/images/alt/stadium-931975.jpg";
import altFanart7 from "../../../resources/images/alt/soccer-1490541.jpg";
import altFanart8 from "../../../resources/images/alt/soccer-players-1478802.jpg";

import "./league.css";
import LeagueItem from "./LeagueItem";

const League = (props) => {
	const leagueId =
		props.match.params.idLeague;
	const dispatch = useDispatch();
	const selectLeague = useSelector(
		state => state.league
	);
	const selectLeagueId = useSelector(
		state => state.leagueId.data.leagues
	);

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
			console.log(selectLeagueId);
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
									<svg tabIndex="-1" onClick={handleShareButton} onKeyPress={handleShareButtonOnPress} className="league__intro__navigation__icon--share icon fadeInFromRight" tabIndex="0">
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
									<a className="league__intro__share__link share-link--google-plus fadeInFromTop" onClick={handleShareButton} onKeyPress={handleShareButtonOnPress} href={`https://plus.google.com/share?url=${"www.mySoccer-time.com/allLeagues/" + el.idLeague}`} rel="noopener noreferrer" target="_blank">
										<svg className="league__intro__share__icon icon">
											<use href={iconSprites + "#icon-google-plus"} />
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
										{
											el.strLeague
										}
									</h1>
								</div>
								<div className="league__intro__header__banner">
									<img
										className="league__intro__header__banner__image"
										src={
											el.strBadge + "/preview"
										}
										alt="League-Banner"
									/>
								</div>
							</figure>
						</section>
					);
				}
			);
		}
	}

	const leagueGallery = () => {
		if (!_.isEmpty(selectLeagueId)) {
			return selectLeagueId.map(
				(el) => {
					return (
						<section
							className="league__gallery fadeIn"
							key={shortid.generate()}>
							<LeagueItem
								picture={
									el.strLogo
								}
								altPicture={
									altFanart1
								}
								altText={
									"Logo"
								}
							/>
							<LeagueItem
								picture={
									el.strBanner
								}
								altPicture={
									altFanart3
								}
								altText={
									"Badge"
								}
							/>
							<LeagueItem
								picture={
									el.strFanart3
								}
								altPicture={
									altFanart4
								}
								altText={
									"Fanart3"
								}
							/>
							<LeagueItem
								picture={
									el.strFanart5
								}
								altPicture={
									altFanart5
								}
								altText={
									"Fanart1"
								}
							/>
                            <LeagueItem
								picture={
									el.strTrophy
								}
								altPicture={
									altFanart6
								}
								altText={
									"Trophy"
								}
							/>
							<LeagueItem
								picture={
									el.strPoster
								}
								altPicture={
									altFanart7
								}
								altText={
									"Poster"
								}
							/>
							<LeagueItem
								picture={
									el.strFanart4
								}
								altPicture={
									altFanart8
								}
								altText={
									"Fanart4"
								}
							/>
						</section>
					);
				}
			);
		}
	};

	const showLeagueDescription = () => {
		if (!_.isEmpty(selectLeagueId)) {
			return selectLeagueId.map(
				(el) => {
					return (
						<div
							className="league__info"
							key={shortid.generate()}>
							<p>
								{el.Country}
							</p>
							<p className="league__descriptionEN">
								{
									el.strDescritpionEN
								}
							</p>
							<p className="league__facebook">
								{
									el.strFacebook
								}
							</p>
							<p className="league__rss">
								{el.strRSS}
							</p>
							<p className="league__twitter">
								{
									el.strTwitter
								}
							</p>
							<p className="league__webpage">
								{
									el.strWebsite
								}
							</p>
							<p className="league__youtube">
								{
									el.strYoutube
								}
							</p>
						</div>
					);
				}
			);
		}
	};

	const showLeague = () => {
		if (!_.isEmpty(selectLeague.data)) {
			return selectLeague.data.teams.map(
				(el) => {
					return (
						<div
							className="league__team"
							key={shortid.generate()}>
							<button
								className="league__btn btn"
								onClick={() =>
									dispatch(
										getFavoritedTeams(
											el.strTeam,
											el
												.idTeamel
												.strTeamBadge +
												"/preview"
										)
									)
								}>
								favorite
							</button>
							<p className="league__team-name">
								{el.strTeam}
							</p>
							<p className="league__team-alt-name">
								{
									el.strAlternate
								}
							</p>
							<Link
								className="league__link link"
								to={`/allTeams/${el.idTeam}`}>
								View Team
							</Link>
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
			{showLeagueDescription()}
			<NextLeagueEvents
				leagueId={leagueId}
			/>
			<Link
				className="sign__link link"
				to={"/"}>
				&#8592; Back
			</Link>
			{showLeague()}
			<Link to={"/"}>Back</Link>
			<LeagueTable
				leagueId={leagueId}
			/>
			{/* <PreviousLeagueEvents leagueId={leagueId} /> */}
			<Link
				className="sign__link link"
				to={"/"}>
				&#8592; Back
			</Link>
		</div>
	);
};

export default League;
