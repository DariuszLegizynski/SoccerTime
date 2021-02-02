import {
	GET_TABLELOOKUP_LOADING,
	GET_TABLELOOKUP_FAIL,
	GET_TABLELOOKUP_SUCCESS,
} from "../../index";
import theSportsDB from "../../../apis/theSportsDB";

export const getTableLookup = (idLeague) => async (dispatch) => {
	let currentYear = new Date().getFullYear();
	let nextYear = currentYear + 1;

	const currentDate = new Date(
		new Date().getFullYear() + "-" + new Date().getMonth()
	);

	// 08/01 is August the 1st...
	const seasonChangeDate = new Date("08/01/" + currentYear);

	//to get the current season
	if (seasonChangeDate >= currentDate) {
		nextYear = currentYear;
		currentYear = currentYear - 1;
		console.log(currentYear);
		console.log(nextYear);
	} else {
		currentYear = new Date().getFullYear();
		nextYear = currentYear + 1;
	}

	try {
		dispatch({
			type: GET_TABLELOOKUP_LOADING,
		});

		const response = await theSportsDB.get(
			`lookuptable.php?l=${idLeague}&s=${currentYear}-${nextYear}`
		);

		dispatch({
			type: GET_TABLELOOKUP_SUCCESS,
			payload: response.data,
			leagueId: idLeague,
		});
	} catch (e) {
		dispatch({
			type: GET_TABLELOOKUP_FAIL,
		});
	}
};
