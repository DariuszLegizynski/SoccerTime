import { GET_TABLELOOKUP_LOADING, GET_TABLELOOKUP_FAIL, GET_TABLELOOKUP_SUCCESS } from "../../index";
import theSportsDB from "../../../apis/theSportsDB";

export const getTableLookup = (idLeague, season) => async (dispatch) => {
    try {
        dispatch ({
            type: GET_TABLELOOKUP_LOADING
        })

        const response = await theSportsDB.get(`lookuptable.php?l=${idLeague}&s=${season}`)

        dispatch ({
            type: GET_TABLELOOKUP_SUCCESS,
            payload: response.data,
            leagueId: idLeague,
            seasonYears: season
        })
    } catch (e) {
        dispatch ({
            type: GET_TABLELOOKUP_FAIL
        })
    }

    
}