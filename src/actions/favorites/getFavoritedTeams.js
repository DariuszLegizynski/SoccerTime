import { GET_FAVORITED_TEAMS } from "../index";

export const getFavoritedTeams = (teamName, teamId) => {
    console.log(teamId);
    return {
        type: GET_FAVORITED_TEAMS,
        teamName,
        teamId
    }
}