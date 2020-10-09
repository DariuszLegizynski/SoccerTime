import { GET_NEXT_TEAM_EVENTS_LOADING, GET_NEXT_TEAM_EVENTS_SUCCESS, GET_NEXT_TEAM_EVENTS_FAIL } from "../index";
import theSportsDB from "../../apis/theSportsDB";

export const getNextTeamEvents = (teamId) => async (dispatch) => {
    try {
        dispatch ({
            type: GET_NEXT_TEAM_EVENTS_LOADING
        })

        const response = await theSportsDB.get(`eventsnext.php?id=${teamId}`);

        dispatch ({
            type: GET_NEXT_TEAM_EVENTS_SUCCESS,
            payload: response.data
        })

    } catch (e) {
        dispatch ({
            type: GET_NEXT_TEAM_EVENTS_FAIL
        })
    }
}