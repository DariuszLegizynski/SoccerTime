import { GET_FAVORITED_TEAMS } from "../../actions/index";

const defaultState = {
    favorites: []
}

const favoritedTeamsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_FAVORITED_TEAMS:
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    {
                        teamName: action.teamName,
                        teamId: action.teamId
                    }
                ]
            }

        default:
            return state;
    }
}

export default favoritedTeamsReducer;