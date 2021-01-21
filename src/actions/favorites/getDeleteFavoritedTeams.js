import { GET_DELETE_FAVORITED_TEAMS } from "../index";

export const getDeleteFavoritedTeams = (teamId) => {
	return {
		type: GET_DELETE_FAVORITED_TEAMS,
		teamId,
	};
};
