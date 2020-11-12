import { GET_DELETE_FAVORITED_LEAGUES } from "../index";

export const getDeleteFavoritedLeagues = (leagueId) => {
    return {
        type: GET_DELETE_FAVORITED_LEAGUES,
        leagueId,
    }
}