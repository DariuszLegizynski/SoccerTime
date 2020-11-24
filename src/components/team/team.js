import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import _ from "lodash";
import shortid from "shortid";

import { getTeam } from "../../actions/team/getTeam";
import { getFavoritedTeams } from "../../actions/favorites/getFavoritedTeams"

import ShowNextEvents from "./showNextEvents";
import ShowPreviousEvents from "./showPreviousEvents";

import TeamGallery from "./TeamGallery";

import "./team.css"
import iconSprites from "../../resources/icons/icomoon/sprite.svg";
import altFanart from "../../resources/images/alt/football-3471402.jpg";
import altStadium from "../../resources/images/alt/audience-1866738.jpg";


const Team = (props) => {
    const idTeam = props.match.params.team;
    const dispatch = useDispatch();
    const selectTeam = useSelector(state => state.team);

    useEffect (() => {
        dispatch(getTeam(idTeam))
    }, [dispatch, idTeam]);

    // Toggles visiblity of share bar
	const handleShareButton = () => {
        document.querySelector(".team__intro__share").classList.toggle("team__intro__share__hide");
        document.querySelector(".team__intro__share__link").toggleAttribute("tabIndex", "0");
      }
  
      // when "enter" is pressed
      const handleShareButtonOnPress = (event) => {
          if (event.key === "Enter") {
              document.querySelector(".team__intro__share").classList.toggle("team__intro__share__hide");
              document.querySelector(".team__intro__share__link").toggleAttribute("tabIndex");
          }
      }

    const teamIntro = () => {
        if(!_.isEmpty(selectTeam.data.teams)) {
            return selectTeam.data.teams.map(el => {
                return (
                    <section className="team__intro fadeIn" key={shortid.generate()}>
                        <figure className="team__intro__image" style={{
                            background: `linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(0,0,0,0.45) 92%) center center no-repeat, #fff
                            url(${el.strTeamFanart1 ? el.strTeamFanart1 : altFanart})
                            center top no-repeat`}}
                            >
                            <div className="team__intro__navigation">
                                <Link to={"/"} className="team__intro__navigation__link link">
                                    <button className="team__intro__navigation__btn btn" tabIndex="-1">
                                        <svg tabIndex="-1" className="team__intro__navigation__icon--back icon fadeInFromLeft">
                                            <use href={iconSprites + "#icon-back"} />
                                        </svg>
                                    </button>
                                </Link>
                                <svg tabIndex="-1" onClick={handleShareButton} onKeyPress={handleShareButtonOnPress} className="team__intro__navigation__icon--share icon fadeInFromRight">
                                    <use href={iconSprites + "#icon-share2"} />
                                </svg>
                            </div>
                            { /* Share bar */ }
                            <div className="team__intro__share team__intro__share__hide">
                                <a className="team__intro__share__link share-link--mail fadeInFromTop" onClick={handleShareButton} onKeyPress={handleShareButtonOnPress} href={`mailto:?Subject=Look%20what%20I%20found%20on%20the%20web!&Body=I%20saw%20this%20and%20thought%20of%20you!%20 ${"www.mySoccer-time.com/allTeams/" + el.idTeam}`}>
                                    <svg className="team__intro__share__icon icon ">
                                        <use href={iconSprites + "#icon-envelope-o"} />
                                    </svg>
                                </a>
                                <a className="team__intro__share__link share-link--facebook fadeInFromTop" onClick={handleShareButton} onKeyPress={handleShareButtonOnPress} href={`http://www.facebook.com/sharer.php?u=${"www.mySoccer-time.com/allTeams/" + el.idTeam}`} rel="noopener noreferrer" target="_blank">
                                    <svg className="team__intro__share__icon icon">
                                        <use href={iconSprites + "#icon-facebook2"} />
                                    </svg>
                                </a>
                                <a className="team__intro__share__link share-link--twitter fadeInFromTop" onClick={handleShareButton} onKeyPress={handleShareButtonOnPress} href={`https://twitter.com/share?url=${"www.mySoccer-time.com/allTeams/" + el.idTeam}`} rel="noopener noreferrer" target="_blank">
                                    <svg className="team__intro__share__icon icon">
                                        <use href={iconSprites + "#icon-twitter"} />
                                    </svg>
                                </a>
                            </div>
                            <div className="team__intro__header__title">
                                <h1 className="team__intro__header__title__h1 h1">
                                    { el.strTeam }
                                </h1>
                            </div>
                            <div className="team__intro__header__banner">
                                <img className="team__intro__header__banner__image" src={ el.strTeamBadge + "/preview" } alt="Team-Badge"/>
                            </div>
                        </figure>
                    </section>
                )
            })
        }
    }

    const teamGallery = () => {
        if(!_.isEmpty(selectTeam.data.teams)) {
            return selectTeam.data.teams.map(el => {
                return (
                    <section className="team__gallery fadeIn" key={shortid.generate()}>
                        <div className="team__gallery__title">
                            <h2 className="team__gallery__title__h2 h2">
                                Since
                            </h2>
                            <p className="team__gallery__title__p p">
                                { el.intFormedYear }
                            </p>
                        </div>
                        <div className="team__gallery__images fadeIn">
                            <TeamGallery picture={el.strTeamLogo} altPicture={altFanart} altText={"Logo"} />
                            <TeamGallery picture={el.strTeamFanart2} altPicture={altFanart} altText={"Fanart2"} />
                            <TeamGallery picture={el.strTeamBadge} altPicture={altFanart} altText={"Badge"} />
                            <TeamGallery picture={el.strTeamFanart3} altPicture={altFanart} altText={"Fanart3"} />
                            <TeamGallery picture={el.strTeamFanart1} altPicture={altFanart} altText={"Fanart1"} />
                            <TeamGallery picture={el.strTeamJersey} altPicture={altFanart} altText={"Trophy"} />
                            <TeamGallery picture={el.strTeamFanart4} altPicture={altFanart} altText={"Fanart4"} />
                            <TeamGallery picture={el.strTeamBanner} altPicture={altFanart} altText={"Banner"} />
                        </div>
                    </section>
                )
            })
        }
    }

    const showTeamDescription = () => {
    if(!_.isEmpty(selectTeam.data.teams)) {
        return selectTeam.data.teams.map(el => {
            return (
                <section className="team__info" key={shortid.generate()}>
                    <div className="team__info__description">
                        <h2 className="team__info__description__h2 h2">
                            Description
                        </h2>
                        <p className="team__info__description__p p">
                            { el.strDescriptionEN }
                        </p>
                    </div>
                    <div className="team__info__media">
                        <a className="team__info__media__link share-link--webpage link fadeInFromTop"  href={"https://" + el.strWebsite} rel="noopener noreferrer" target="_blank">
                            <svg className="team__info__media__icon icon">
                                <use href={iconSprites + "#icon-earth"} />
                            </svg>
                        </a>
                        <a className="team__info__media__link share-link--rss link fadeInFromTop"  href={el.strRSS} rel="noopener noreferrer" target="_blank">
                            <svg className="team__info__media__icon icon">
                                <use href={iconSprites + "#icon-rss2"} />
                            </svg>
                        </a>
                        <a className="team__info__media__link share-link--youtube link fadeInFromTop"  href={"https://" + el.strYoutube} rel="noopener noreferrer" target="_blank">
                            <svg className="team__info__media__icon icon">
                                <use href={iconSprites + "#icon-youtube"} />
                            </svg>
                        </a>
                        <a className="team__info__media__link share-link--twitter link fadeInFromTop"  href={"https://" + el.strTwitter} rel="noopener noreferrer" target="_blank">
                            <svg className="team__info__media__icon icon">
                                <use href={iconSprites + "#icon-twitter"} />
                            </svg>
                        </a>
                        <a className="team__info__media__link share-link--facebook link fadeInFromTop" href={"https://" + el.strFacebook} rel="noopener noreferrer" target="_blank">
                            <svg className="team__info__media__icon icon">
                                <use href={iconSprites + "#icon-facebook2"} />
                            </svg>
                        </a>
                    </div>
                </section>
                )
            })
        };

        if(selectTeam.loading) {
            return <p>loading...</p>
        }

        if(selectTeam.errorMsg !== "") {
            return <p>{selectTeam.errorMsg}</p>
        }

    return <p>Unable to get the team's data</p>
    }

    const showStadium = () => {
        if(!_.isEmpty(selectTeam.data.teams)) {
            return selectTeam.data.teams.map(el => {
                return (
                    <section className="team__stadium" key={shortid.generate()}>
                        <figure className="team__stadium__image" style={{
                            background: `linear-gradient(90deg,  rgba(10, 168, 72, .75), rgba(17, 17, 17, .55), rgba(10, 168, 72, .75)),
                            url(${el.strStadiumThumb ? el.strStadiumThumb : altStadium})
                            center top no-repeat`}}>
                            <div className="team__stadium__description">
                                <h2 className="team__stadium__description__h2 description__h2 h2">
                                    Stadium
                                </h2>
                                <p className="team__stadium__description__p description__p p">
                                    {el.strStadium}
                                </p>
                                <h2 className="team__stadium__description__h2 description__h2 h2">
                                    Description
                                </h2>
                                <p className="team__stadium__description__p description__p p">
                                    {el.strStadiumDescription}
                                </p>
                                <div className="team__stadium__description__facts">
                                    <div className="team__stadium__description__facts__location">
                                        <h2 className="team__stadium__description__facts__location__h2 description__h2 h2">
                                            Location
                                        </h2>
                                        <p className="team__stadium__description__facts__location__p description__p p">
                                            {el.strStadiumLocation}
                                        </p>
                                    </div>
                                    <div className="team__stadium__description__facts__capacity">
                                        <h2 className="team__stadium__descriptionn__facts__capacity__h2 description__h2 h2">
                                            Capacity
                                        </h2>
                                        <p className="team__stadium__descriptionn__facts__capacity__p description__p p">
                                            {el.intStadiumCapacity}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </section>
                )
            })
        }

        if(selectTeam.loading) {
            return <p>loading...</p>
        }

        if(selectTeam.errorMsg !== "") {
            return <p>{selectTeam.errorMsg}</p>
        }

    return <p>Unable to get the team's stadium</p>
    }

    const favoriteButton = () => {
        if(!_.isEmpty(selectTeam.data.teams)) {
            return selectTeam.data.teams.map(el => {
                return (
                    <div className="team__container-btn" key={shortid.generate()}>
                        <div className="team__container-btn__center-btn">
                            <button className="team__container-btn__center-btn__button btn" onClick={() => dispatch(getFavoritedTeams(el.strTeam, el.idTeam, el.strTeamBadge+"/preview"))}>
                                favorite team
                            </button>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <div className="team">
            {teamIntro()}
            {teamGallery()}
            <hr className="hr" />
            {favoriteButton()}
            <hr className="hr" />
            {showTeamDescription()}
            <ShowNextEvents idTeam={idTeam} />
            <hr className="hr" />
            {favoriteButton()}
            <hr className="hr" />
            {showStadium()}
            <ShowPreviousEvents idTeam={idTeam} />
            <Link to={"/"} className="team__intro__navigation__link link">
				<button className="team__intro__navigation__btn btn" tabIndex="-1">
					<svg tabIndex="-1" className="team__intro__navigation__icon--back icon fadeInFromLeft">
						<use href={iconSprites + "#icon-back"} />
					</svg>
				</button>
			</Link>
        </div>
    )
}

export default Team;