import { GET_LEAGUE_LOADING, GET_LEAGUE_SUCCESS, GET_LEAGUE_FAIL } from "../../index";
import theSportsDB from "../../../apis/theSportsDB";

export const getLeague = (league) => async (dispatch) => {
    try {
        dispatch ({
            type: GET_LEAGUE_LOADING
        })

        const response = await theSportsDB.get(`search_all_teams.php?l=${league}`);

        dispatch ({
            type: GET_LEAGUE_SUCCESS,
            payload: response.data,
            // leagueName: league
        })
    } catch (e) {
        dispatch ({
            type: GET_LEAGUE_FAIL
        })
    }
}