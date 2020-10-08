import { GET_TEAM_LOADING, GET_TEAM_SUCCESS, GET_TEAM_FAIL } from "../index";
import theSportsDB from "../../apis/theSportsDB";

export const getTeam = (idteam) => async (dispatch) => {
    try {
        dispatch ({
            type: GET_TEAM_LOADING
        })

        const response = await theSportsDB.get(`lookupteam.php?id=${idteam}`)

        dispatch ({
            type: GET_TEAM_SUCCESS,
            payload: response.data
        })

    } catch(e) {
        dispatch ({
            type: GET_TEAM_FAIL
        })
    }
}