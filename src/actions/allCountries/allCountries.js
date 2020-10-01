import { GET_ALL_COUNTRIES_LOADING, GET_ALL_COUNTRIES_SUCCESS, GET_ALL_COUNTRIES_FAIL } from "../index";
import theSportsDB from "../../apis/theSportsDB";

export const allCountries = () => async (dispatch) => { 
    try {
        dispatch ({
            type: GET_ALL_COUNTRIES_LOADING
        })

        const response = await theSportsDB.get("all_countries.php");
        
        dispatch ({
            type: GET_ALL_COUNTRIES_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        dispatch ({
            type: GET_ALL_COUNTRIES_FAIL
        })
    }    
}