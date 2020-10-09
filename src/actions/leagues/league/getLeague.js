import { GET_LEAGUE_LOADING, GET_LEAGUE_SUCCESS, GET_LEAGUE_FAIL } from "../../index";
import theSportsDB from "../../../apis/theSportsDB";

export const getLeague = (leagueId) => async (dispatch) => {
    try {
        dispatch ({
            type: GET_LEAGUE_LOADING
        })

        const response = await theSportsDB.get(`lookup_all_teams.php?id=${leagueId}`);

        dispatch ({
            type: GET_LEAGUE_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        dispatch ({
            type: GET_LEAGUE_FAIL
        })
    }
}