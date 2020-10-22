import { GET_FAVORITED_LEAGUES } from "../index";

export const getFavoritedLeagues = (payload) => {
    return {
        type: GET_FAVORITED_LEAGUES,
        payload
    }
}