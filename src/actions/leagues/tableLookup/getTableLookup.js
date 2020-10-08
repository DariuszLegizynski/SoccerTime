import { GET_TABLELOOKUP_LOADING, GET_TABLELOOKUP_FAIL, GET_TABLELOOKUP_SUCCESS } from "../../index";
import theSportsDB from "../../../apis/theSportsDB";

export const getTableLookup = (idLeague) => async (dispatch) => {
    try {
        dispatch ({
            type: GET_TABLELOOKUP_LOADING
        })

        const response = await theSportsDB.get(`lookuptable.php?l=${idLeague}&s=2019-2020`)

        dispatch ({
            type: GET_TABLELOOKUP_SUCCESS,
            payload: response.data,
            leagueId: idLeague
        })
    } catch (e) {
        dispatch ({
            type: GET_TABLELOOKUP_FAIL
        })
    }

    
}