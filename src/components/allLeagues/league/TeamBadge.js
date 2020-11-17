import React from "react";
import { Link } from "react-router-dom";
import "./league.css";

const TeamBadge = ({teamBadge, teamId}) => {
    return (
        <Link className="league__team-badge__link link" to={"/allTeams/" + teamId}>
            <img className="league__team-badge__img" src={teamBadge + "/preview"} alt="team-badge" />
        </Link>
    )
}

export default TeamBadge;