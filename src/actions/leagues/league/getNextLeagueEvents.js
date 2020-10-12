import { GET_NEXT_LEAGUE_EVENTS_LOADING, GET_NEXT_LEAGUE_EVENTS_SUCCESS, GET_NEXT_LEAGUE_EVENTS_FAIL } from "../../index";
import theSportsDB from "../../../apis/theSportsDB";

export const getNextLeagueEvents = (leagueId) => async (dispatch) => {
    try {
        dispatch ({
            type: GET_NEXT_LEAGUE_EVENTS_LOADING
        })

        const response = await theSportsDB.get(`eventsnextleague.php?id=${leagueId}`);

        dispatch ({
            type: GET_NEXT_LEAGUE_EVENTS_SUCCESS,
            payload: response.data
        })

    } catch (e) {
        dispatch ({
            type: GET_NEXT_LEAGUE_EVENTS_FAIL
        })
    }
}