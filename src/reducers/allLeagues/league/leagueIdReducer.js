import { GET_LEAGUE_ID_LOADING, GET_LEAGUE_ID_SUCCESS, GET_LEAGUE_ID_FAIL } from "../../../actions/index";

const DefaultState = {
    loading: false,
    data: {},
    errorMsg: ""
};

const LeagueIdReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case GET_LEAGUE_ID_LOADING:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };

        case GET_LEAGUE_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                errorMsg: ""
            };

        case GET_LEAGUE_ID_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "league not found"
            };
    default:
        return state
    }
}

export default LeagueIdReducer;