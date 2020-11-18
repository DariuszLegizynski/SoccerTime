import { GET_TABLELOOKUP_LOADING, GET_TABLELOOKUP_FAIL, GET_TABLELOOKUP_SUCCESS } from "../../index";
import theSportsDB from "../../../apis/theSportsDB";

export const getTableLookup = (idLeague) => async (dispatch) => {

    let currentYear = new Date().getFullYear();
    let nextYear = currentYear + 1;

    const currentDate = new Date(new Date().getFullYear() + '-' + (new Date().getMonth()));
    const seasonChangeDate = "01/08/" + currentYear;

    console.log(seasonChangeDate > currentDate);
    console.log(currentYear);
    console.log(nextYear);

    //to get the current season
    if (seasonChangeDate >= currentDate) {
        nextYear = currentYear;
        currentYear = currentYear - 1;
        console.log(currentYear);
        console.log(nextYear);

    } else {
        return;
    }

    console.log(currentYear);
    console.log(nextYear);

    try {
        dispatch ({
            type: GET_TABLELOOKUP_LOADING
        })

        const response = await theSportsDB.get(`lookuptable.php?l=${idLeague}&s=${currentYear}-${nextYear}`)

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