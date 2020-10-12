import { GET_PREVIOUS_LEAGUE_EVENTS_LOADING, GET_PREVIOUS_LEAGUE_EVENTS_SUCCESS, GET_PREVIOUS_LEAGUE_EVENTS_FAIL } from "../../index";
import theSportsDB from "../../../apis/theSportsDB";

export const getPreviousLeagueEvents = (leagueId) => async (dispatch) => {
    try {
        dispatch ({
            type: GET_PREVIOUS_LEAGUE_EVENTS_LOADING
        })

        const response = await theSportsDB.get(`eventspastleague.php?id=${leagueId}`);

        dispatch ({
            type: GET_PREVIOUS_LEAGUE_EVENTS_SUCCESS,
            payload: response.data
        })

    } catch (e) {
        dispatch ({
            type: GET_PREVIOUS_LEAGUE_EVENTS_FAIL
        })
    }
}