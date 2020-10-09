import { GET_PREVIOUS_TEAM_EVENTS_LOADING, GET_PREVIOUS_TEAM_EVENTS_SUCCESS, GET_PREVIOUS_TEAM_EVENTS_FAIL } from "../index";
import theSportsDB from "../../apis/theSportsDB";

export const getPreviousTeamEvents = (teamId) => async (dispatch) => {
    try {
        dispatch ({
            type: GET_PREVIOUS_TEAM_EVENTS_LOADING
        })

        const response = await theSportsDB.get(`eventslast.php?id=${teamId}`);

        dispatch ({
            type: GET_PREVIOUS_TEAM_EVENTS_SUCCESS,
            payload: response.data
        })

    } catch (e) {
        dispatch ({
            type: GET_PREVIOUS_TEAM_EVENTS_FAIL
        })
    }
}