import { GET_GERMAN_LEAGUE_LOADING, GET_GERMAN_LEAGUE_SUCCESS, GET_GERMAN_LEAGUE_FAIL } from "../../index";
import theSportsDB from "../../../apis/theSportsDB";

export const germanLeague = () => async (dispatch) => { 
    try {
        dispatch ({
            type: GET_GERMAN_LEAGUE_LOADING
        })

        const response = await theSportsDB.get("search_all_leagues.php?c=Germany&s=Soccer");
        
        dispatch ({
            type: GET_GERMAN_LEAGUE_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        dispatch ({
            type: GET_GERMAN_LEAGUE_FAIL
        })
    }    
}