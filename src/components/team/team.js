import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";

import _ from "lodash";
import shortid from "shortid";

import { getTeam } from "../../actions/team/getTeam";

const Team = (props) => {
    const idTeam = props.match.params.team;
    const dispatch = useDispatch();
    const selectTeam = useSelector(state => state.team)

    useEffect (() => {
        dispatch(getTeam(idTeam))
    }, [dispatch, idTeam]);

    const showTeam = () => {
    if(!_.isEmpty(selectTeam.data.teams)) {
        return selectTeam.data.teams.map(el => {
            return (
                <div key={shortid.generate()}>
                    <Link to={`/allLeagues/${el.idLeague}`}>Back</Link>
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
                    <Link to={`/allLeagues/${el.idLeague}`}>Back</Link>
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
        <div>
            Team Details:
            {showTeam()}
        </div>
    )
}

export default Team;