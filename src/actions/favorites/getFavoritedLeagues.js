import { GET_FAVORITED_LEAGUES } from "../index";

export const getFavoritedLeagues = (leagueName, leagueId, leagueBadge) => {
    return {
        type: GET_FAVORITED_LEAGUES,
        leagueName,
        leagueId,
        leagueBadge
    }
}