import { GET_FAVORITED_LEAGUES, GET_DELETE_FAVORITED_LEAGUES } from "../../actions/index";
import _ from "lodash";

const defaultState = {
    favorites: []
}

//to prevent duplicates in favorited leagues
const leagueExists = (favoritedLeagues, league_Id) => {
    if (_.isEmpty(favoritedLeagues.favorites)) {
        return;
    } else {
        return favoritedLeagues.favorites.some(el => el.leagueId === league_Id);
    }
}

const favoritedLeaguesReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_FAVORITED_LEAGUES:
            if(leagueExists(state, action.leagueId)) {
                return state;
            }
            else {
                return {
                    ...state,
                    favorites: [
                        ...state.favorites,
                        {
                            leagueName: action.leagueName,
                            leagueId: action.leagueId,
                            leagueBadge: action.leagueBadge
                        }
                    ]
                }
            }

        case GET_DELETE_FAVORITED_LEAGUES:
            console.log(state);
            return {
                ...state,
                favorites: [
                    ...state.favorites.filter(el => el.leagueId !== action.leagueId)
                ]
            }
            
        default:
            return state;
    }
}

export default favoritedLeaguesReducer;