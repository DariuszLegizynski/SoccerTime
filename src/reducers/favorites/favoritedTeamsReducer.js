import { GET_FAVORITED_TEAMS } from "../../actions/index";

const defaultState = {
    favorites: []
}

const favoritedTeamsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_FAVORITED_TEAMS:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export default favoritedTeamsReducer;