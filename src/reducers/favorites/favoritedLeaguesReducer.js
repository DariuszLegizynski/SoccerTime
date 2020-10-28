import { GET_FAVORITED_LEAGUES } from "../../actions/index";

const defaultState = {
    favorites: []
}

const favoritedLeaguesReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_FAVORITED_LEAGUES:
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    {
                        leagueName: action.leagueName,
                        leagueId: action.leagueId
                    }
                ]
            }

        default:
            return state;
    }
}

export default favoritedLeaguesReducer;