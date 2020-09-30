import { GET_ENGLISH_LEAGUE_LOADING, GET_ENGLISH_LEAGUE_SUCCESS, GET_ENGLISH_LEAGUE_FAIL } from "../../index";
import theSportsDB from "../../../apis/theSportsDB";

export const englishLeague = () => async (dispatch) => { 
    try {
        dispatch ({
            type: GET_ENGLISH_LEAGUE_LOADING
        })

        const response = await theSportsDB.get("search_all_leagues.php?c=England&s=Soccer");
        
        dispatch ({
            type: GET_ENGLISH_LEAGUE_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        dispatch ({
            type: GET_ENGLISH_LEAGUE_FAIL
        })
    }    
}