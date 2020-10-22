import { GET_FAVORITED_TEAMS } from "../index";

export const getFavoritedTeams = (payload) => {
    return {
        type: GET_FAVORITED_TEAMS,
        payload
    }
}