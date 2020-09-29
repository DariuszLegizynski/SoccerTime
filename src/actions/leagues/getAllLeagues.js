// import { GET_ALL_LEAGUES_LOADING, GET_ALL_LEAGUES_SUCCESS, GET_ALL_LEAGUES_FAIL } from "../index";
import theSportsDB from "../../apis/theSportsDB";

export const getAllLeagues = () => async (dispatch) => { 
    try {
        dispatch ({
            type: "GET_ALL_LEAGUES_LOADING"
        })

        const response = await theSportsDB.get("search_all_leagues.php?c=England&s=Soccer")

        dispatch ({
            type: "GET_ALL_LEAGUES_SUCCESS",
            payload: response.data
        })
    } catch (e) {
        dispatch ({
            type: "GET_ALL_LEAGUES_FAIL"
        })
    }    
}