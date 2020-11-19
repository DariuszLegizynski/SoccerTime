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
import altFanart from "../../resources/images/alt/jimmy-conover-SEQ2VI0KI6A-unsplash.jpg";


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
            console.log(selectTeam.data.teams);
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
                        <TeamGallery picture={el.strTeamLogo} altPicture={altFanart} altText={"Logo"} />
                        <TeamGallery picture={el.strTeamFanart2} altPicture={altFanart} altText={"Fanart2"} />
                        <TeamGallery picture={el.strTeamBadge} altPicture={altFanart} altText={"Badge"} />
                        <TeamGallery picture={el.strTeamFanart3} altPicture={altFanart} altText={"Fanart3"} />
                        <TeamGallery picture={el.strTeamFanart1} altPicture={altFanart} altText={"Fanart1"} />
                        <TeamGallery picture={el.strTeamJersey} altPicture={altFanart} altText={"Trophy"} />
                        <TeamGallery picture={el.strTeamFanart4} altPicture={altFanart} altText={"Fanart4"} />
                        <TeamGallery picture={el.strTeamBanner} altPicture={altFanart} altText={"Banner"} />
                    </section>
                )
            })
        }
    }

    const showTeam = () => {
    if(!_.isEmpty(selectTeam.data.teams)) {
        return selectTeam.data.teams.map(el => {
            return (
                <div key={shortid.generate()}>
                    <Link to={`/allTeams/${el.idTeam}`}>Back</Link>
                    <button onClick={() => dispatch(getFavoritedTeams(el.strTeam, el.idTeam, el.strTeamBadge+"/preview"))}>favorite</button>
                    <p>Team: </p>
                    {el.strTeam}
                    <p>Team Alternate: </p>
                    {el.strAlternate}
                    <p>Country</p>
                    {el.strCountry}
                    <p>Year Formed: </p>
                    {el.intFormedYear}
                    <p>Team Description</p>
                    {el.strDescriptionEN}
                    <br/>
                    <Link to={`/allTeams/${el.idTeam}`}>Back</Link>
                    <br/>
                    <p>Team Badge</p>
                    <img src={el.strTeamBadge+"/preview"} alt="Team Badge" />
                    <p>Team Jersey</p>
                    <img src={el.strTeamJersey+"/preview"} alt="Jersey" />
                    <p>Team Logo</p>
                    <img src={el.strTeamLogo+"/preview"} alt="Team Logo" />
                    <p>Team Fanart 1</p>
                    <img src={el.strTeamFanart1+"/preview"} alt="Team Fanart 1" />
                    <p>Team Fanart 2</p>
                    <img src={el.strTeamFanart2+"/preview"} alt="Team Fanart 2" />
                    <p>Team Fanart 3</p>
                    <img src={el.strTeamFanart3+"/preview"} alt="Team Fanart 3" />
                    <p>Team Fanart 4</p>
                    <img src={el.strTeamFanart4+"/preview"} alt="Team Fanart 4" />
                    <p>Team Banner</p>
                    <img src={el.strTeamBanner+"/preview"} alt="Team Banner" />
                    <br/>
                    <p>Website</p>
                    {el.strWebsite}
                    <p>Twitter</p>
                    {el.strTwitter}
                    <p>Facebook</p>
                    {el.strFacebook}
                    <p>Youtube</p>
                    {el.strYoutube}
                    <p>Instagram</p>
                    {el.strInstagram}
                    <br/>
                    <p>Stadium: </p>
                    {el.strStadium}
                    <p>Stadium Thumb</p>
                    <img src={el.strStadiumThumb+"/preview"} alt="Stadium Thumb" />
                    <p>Stadium Location: </p>
                    {el.strStadiumLocation}
                    <p>Stadium Capacity: </p>
                    {el.intStadiumCapacity}
                    <p>Stadium Description</p>
                    {el.strStadiumDescription}
                    <Link to={`/allTeams/${el.idTeam}`}>Back</Link>
                </div>
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

    return (
        <div className="team">
            {teamIntro()}
            {teamGallery()}
            <ShowNextEvents idTeam={idTeam} />
            Team Details:
            {showTeam()}
            <ShowPreviousEvents idTeam={idTeam} />
            <Link to={"/"}>Home</Link>
        </div>
    )
}

export default Team;