import { GET_LEAGUE_ID_LOADING, GET_LEAGUE_ID_SUCCESS, GET_LEAGUE_ID_FAIL } from "../../index";
import theSportsDB from "../../../apis/theSportsDB";

export const getLeagueId = (leagueId) => async (dispatch) => {

    try {
        dispatch ({
            type: GET_LEAGUE_ID_LOADING
        })

        const response = await theSportsDB.get(`lookupleague.php?id=${leagueId}`);
        console.log(response)

        dispatch ({
            type: GET_LEAGUE_ID_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        dispatch ({
            type: GET_LEAGUE_ID_FAIL
        })
    }
}