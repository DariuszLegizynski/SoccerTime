import { GET_SEARCH_TEAM_LOADING, GET_SEARCH_TEAM_SUCCESS, GET_SEARCH_TEAM_FAIL } from "../index";
import theSportsDB from "../../apis/theSportsDB";

export const getSearchTeam = (searchTeam) => async (dispatch) => {
    try {
        dispatch ({
            type: GET_SEARCH_TEAM_LOADING
        })

        const response = await theSportsDB.get(`searchteams.php?t=${searchTeam}`);

        dispatch ({
            type: GET_SEARCH_TEAM_SUCCESS,
            payload: response.data
        })

    } catch(e) {
        dispatch ({
            type: GET_SEARCH_TEAM_FAIL
        })
    }
}