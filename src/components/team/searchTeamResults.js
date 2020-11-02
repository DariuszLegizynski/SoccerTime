import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import _ from "lodash";
import shortid from "shortid";


const SearchTeamResults = () => {
    const selectSearchedTeams = useSelector(state => state.searchTeam.data.teams);

    if(!_.isEmpty(selectSearchedTeams)) {
        console.log(selectSearchedTeams.filter(el => el.strSport === "Soccer"));
    }

    const showResults = () => {
        if(_.isEmpty(selectSearchedTeams)) {
            return <p>no results found.</p>
        } else {
            return selectSearchedTeams.filter(el => el.strSport === "Soccer").map(el => {
                return (
                    <div key={shortid.generate()} >
                        <p>{el.Country}</p>
                        <p>{el.strTeam}</p>
                        <p>{el.strAlternate}</p>
                        <img src={el.strTeamBadge+"/preview"} alt="Team Badge" />
                        <Link to={`/allTeams/${el.idTeam}`}>
                            View Team
                        </Link>
                    </div>

                )
            })
        }
    }

    return (
        <div>
            {showResults()}
        </div>
    )
}

export default SearchTeamResults;