import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import _ from "lodash";
import shortid from "shortid";

//Components
import Intro from "../../Intro/Intro";
import Footer from "../../footer/Footer";
import { allLeagues } from "../../../actions/leagues/allLeagues/allLeagues";
import { allCountries } from "../../../actions/allCountries/allCountries";
import { getFavoritedLeagues } from "../../../actions/favorites/getFavoritedLeagues";

//Tippy
import { delegate } from "tippy.js";
import "tippy.js/dist/tippy.css"; // optional

//styles
import "./AllLeagues.css";
import iconSprites from "../../../resources/icons/icomoon/sprite.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//the api provides 257 country names.
//TODO: Hardcoded till I find a better solution.
const ALL_COUNTRIES_LENGTH = 256;

const AllLeagues = () => {
	const dispatch = useDispatch();
	const selectAllCountries = useSelector(
		(state) => state.allCountries
	);
	const selectAllLeagues = useSelector(
		(state) => state.allLeagues
	);

	useEffect(() => {
		dispatch(allCountries());
	}, [dispatch]);

	useEffect(() => {
		if (!_.isEmpty(selectAllCountries.data)) {
			selectAllCountries.data.countries.map((el) =>
				dispatch(allLeagues(el.name_en))
			);
		}
	}, [dispatch, selectAllCountries.data]);

	let allCountriesArr = [];

	allCountriesArr = Object.values(selectAllLeagues.data);

	let allLeaguesFiltered = [];
	let getAllLeagues = [];

	if (allCountriesArr.length > ALL_COUNTRIES_LENGTH) {
		console.log("TESRT")
		allLeaguesFiltered = allCountriesArr
			.flat()
			.filter((el) => el !== null);
		getAllLeagues = allLeaguesFiltered.flat();
	}

	let getAllZeroDivisionLeagues = [];
	let getAllFirstDivisionLeagues = [];
	let getAllSecondDivisionLeagues = [];
	let getAllThirdDivisionLeagues = [];

	if (!_.isEmpty(getAllLeagues)) {
		getAllZeroDivisionLeagues = getAllLeagues.filter(
			(el) => el.intDivision === "0"
		);
		getAllFirstDivisionLeagues = getAllLeagues.filter(
			(el) => el.intDivision === "1"
		);
		getAllSecondDivisionLeagues = getAllLeagues.filter(
			(el) => el.intDivision === "2"
		);
		getAllThirdDivisionLeagues = getAllLeagues.filter(
			(el) => el.intDivision === "3"
		);
	}

	/////////////////
	// used by Tippy

	delegate(".AllLeagues__league", {
		target: ".AllLeagues__btn",
		content: "Favorite?",
	});

	///////////////////
	// react-slick

	const SampleNextArrow = ({ className, to, onClick }) => {
		return (
			<button
				className={`carousel__btn--next ${className}`}
				onClick={onClick}
				aria-label={to}
			>
				<svg className="carousel__icon icon">
					<use
						href={iconSprites + "#icon-circle-right"}
					/>
				</svg>
			</button>
		);
	};

	const SamplePrevArrow = ({ className, to, onClick }) => {
		return (
			<button
				className={`carousel__btn--prev ${className}`}
				onClick={onClick}
				aria-label={to}
			>
				<svg className="carousel__icon icon">
					<use
						href={iconSprites + "#icon-circle-left"}
					/>
				</svg>
			</button>
		);
	};

	const sliderSettings = {
		dots: true,
		infinite: false,
		autoplay: true,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 6,
		initialSlide: 0,
		arrows: true,
		nextArrow: <SampleNextArrow to="next" />,
		prevArrow: <SamplePrevArrow to="prev" />,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					dots: true,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: false,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				},
			},
		],
	};

	/////////////////////

	const showData = () => {
		if (!_.isEmpty(selectAllLeagues.data)) {
			return (
				<React.Fragment>
					<section className="AllLeagues__league">
						<h2 className="AllLeagues__h2 h2 fadeIn">
							Most Favorited Leagues:
						</h2>
						<Slider {...sliderSettings}>
							{getAllZeroDivisionLeagues.map(
								(el) => {
									return (
										<div
											className="AllLeagues__cardContainer linkWrapper fadeIn"
											key={shortid.generate()}
										>
											<Link
												className="header__link link"
												to={{
													pathname: `/allLeagues/${el.idLeague}`,
													state: {
														leagueName:
															el.strLeague,
													},
												}}
											>
												<div className="AllLeagues__card">
													<img
														className="AllLeagues__badge"
														src={
															el.strBadge +
															"/preview"
														}
														alt="League Badge"
													/>
												</div>
												<h3 className="AllLeagues__h3 h3">
													{
														el.strLeague
													}
												</h3>
											</Link>
											<button
												className="AllLeagues__btn btn"
												onClick={() =>
													dispatch(
														getFavoritedLeagues(
															el.strLeague,
															el.idLeague,
															el.strBadge +
																"/preview"
														)
													)
												}
											>
												<svg className="AllLeagues__icon icon">
													<use
														href={
															iconSprites +
															"#icon-soccer"
														}
													/>
												</svg>
											</button>
										</div>
									);
								}
							)}
						</Slider>
					</section>
					<hr className="AllLeagues__hr hr" />
					<section className="AllLeagues__league fadeIn">
						<h2 className="AllLeagues__h2 h2">
							First Leagues:
						</h2>
						<Slider {...sliderSettings}>
							{getAllFirstDivisionLeagues.map(
								(el) => {
									return (
										<div
											className="AllLeagues__cardContainer linkWrapper fadeIn"
											key={shortid.generate()}
										>
											<Link
												className="header__link link"
												to={{
													pathname: `/allLeagues/${el.idLeague}`,
													state: {
														leagueName:
															el.strLeague,
													},
												}}
											>
												<div className="AllLeagues__card">
													<img
														className="AllLeagues__badge"
														src={
															el.strBadge +
															"/preview"
														}
														alt="League Badge"
													/>
												</div>
												<h3 className="AllLeagues__h3 h3">
													{
														el.strLeague
													}
												</h3>
											</Link>
											<button
												className="AllLeagues__btn btn"
												onClick={() =>
													dispatch(
														getFavoritedLeagues(
															el.strLeague,
															el.idLeague,
															el.strBadge +
																"/preview"
														)
													)
												}
											>
												<svg className="AllLeagues__icon icon">
													<use
														href={
															iconSprites +
															"#icon-soccer"
														}
													/>
												</svg>
											</button>
										</div>
									);
								}
							)}
						</Slider>
					</section>
					<hr className="AllLeagues__hr hr" />
					<section className="AllLeagues__league fadeIn">
						<h2 className="AllLeagues__h2 h2">
							Second Leagues:
						</h2>
						<Slider {...sliderSettings}>
							{getAllSecondDivisionLeagues.map(
								(el) => {
									return (
										<div
											className="AllLeagues__cardContainer linkWrapper fadeIn"
											key={shortid.generate()}
										>
											<Link
												className="header__link link"
												to={{
													pathname: `/allLeagues/${el.idLeague}`,
													state: {
														leagueName:
															el.strLeague,
													},
												}}
											>
												<div className="AllLeagues__card">
													<img
														className="AllLeagues__badge"
														src={
															el.strBadge +
															"/preview"
														}
														alt="League Badge"
													/>
												</div>
												<h3 className="AllLeagues__h3 h3">
													{
														el.strLeague
													}
												</h3>
											</Link>
											<button
												className="AllLeagues__btn btn"
												onClick={() =>
													dispatch(
														getFavoritedLeagues(
															el.strLeague,
															el.idLeague,
															el.strBadge +
																"/preview"
														)
													)
												}
											>
												<svg className="AllLeagues__icon icon">
													<use
														href={
															iconSprites +
															"#icon-soccer"
														}
													/>
												</svg>
											</button>
										</div>
									);
								}
							)}
						</Slider>
					</section>
					<hr className="AllLeagues__hr hr" />
					<section className="AllLeagues__league fadeIn">
						<h2 className="AllLeagues__h2 h2">
							Third Leagues:
						</h2>
						<Slider {...sliderSettings}>
							{getAllThirdDivisionLeagues.map(
								(el) => {
									return (
										<div
											className="AllLeagues__cardContainer linkWrapper fadeIn"
											key={shortid.generate()}
										>
											<Link
												className="header__link link"
												to={{
													pathname: `/allLeagues/${el.idLeague}`,
													state: {
														leagueName:
															el.strLeague,
													},
												}}
											>
												<div className="AllLeagues__card">
													<img
														className="AllLeagues__badge"
														src={
															el.strBadge +
															"/preview"
														}
														alt="League Badge"
													/>
												</div>
												<h3 className="AllLeagues__h3 h3">
													{
														el.strLeague
													}
												</h3>
											</Link>
											<button
												className="AllLeagues__btn btn"
												onClick={() =>
													dispatch(
														getFavoritedLeagues(
															el.strLeague,
															el.idLeague,
															el.strBadge +
																"/preview"
														)
													)
												}
											>
												<svg className="AllLeagues__icon icon">
													<use
														href={
															iconSprites +
															"#icon-soccer"
														}
													/>
												</svg>
											</button>
										</div>
									);
								}
							)}
						</Slider>
					</section>
					<hr className="AllLeagues__hr hr" />
				</React.Fragment>
			);
		}

		if (selectAllLeagues.loading) {
			return <p>loading...</p>;
		}

		if (selectAllLeagues.errorMsg !== "") {
			return <p>{selectAllLeagues.errorMsg}</p>;
		}

		return <p>Loading...</p>;
	};

	return (
		<React.Fragment>
			<Intro />
			<main className="AllLeagues">
				<div className="AllLeagues__h1 fadeIn">
					<h1 className="h1">Leagues</h1>
				</div>
				{showData()}
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default AllLeagues;
