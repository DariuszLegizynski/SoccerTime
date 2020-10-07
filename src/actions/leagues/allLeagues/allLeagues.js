import { GET_ALL_LEAGUES_LOADING, GET_ALL_LEAGUES_SUCCESS, GET_ALL_LEAGUES_FAIL } from "../../index";
import theSportsDB from "../../../apis/theSportsDB";
import _ from "lodash";

export const allLeagues = (country) => async (dispatch, getState) => {

    if (!_.isEmpty(getState().allLeagues) && !_.isEmpty(getState().allLeagues.data)) {
        return Promise.resolve();
    } else {

        try {
            dispatch ({
                type: GET_ALL_LEAGUES_LOADING
            })

            const response = await theSportsDB.get(`search_all_leagues.php?c=${country}&s=Soccer`);
            
            dispatch ({
                type: GET_ALL_LEAGUES_SUCCESS,
                payload: response.data,
                countryName: country
            })
        } catch (e) {
            dispatch ({
                type: GET_ALL_LEAGUES_FAIL
            })
        }
    }    
}