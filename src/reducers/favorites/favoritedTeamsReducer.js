import { GET_FAVORITED_TEAMS } from "../../actions/index";
import _ from "lodash";

const defaultState = {
    favorites: []
}

//to prevent duplicates in favorited teams
const teamsExists = (favoritedTeams, team_Id) => {
    if (_.isEmpty(favoritedTeams.favorites)) {
        return;
    } else {
        return favoritedTeams.favorites.some(el => el.teamId === team_Id);
    }
}

const favoritedTeamsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_FAVORITED_TEAMS:
            if(teamsExists(state, action.teamId)) {
                return state;
            } else {
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
            }

        default:
            return state;
    }
}

export default favoritedTeamsReducer;