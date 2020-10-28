import { GET_FAVORITED_LEAGUES } from "../index";

export const getFavoritedLeagues = (leagueName, leagueId) => {
    return {
        type: GET_FAVORITED_LEAGUES,
        leagueName,
        leagueId
    }
}