import { GET_LEAGUE_LOADING, GET_LEAGUE_SUCCESS, GET_LEAGUE_FAIL } from "../../../actions/index";

const DefaultState = {
    loading: false,
    data: {},
    errorMsg: ""
};

const LeagueReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case GET_LEAGUE_LOADING:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };

        case GET_LEAGUE_SUCCESS:
            // return {
            //     ...state,
            //     loading: false,
            //     data: action.payload,
            //     errorMsg: ""
            // };
            return {
                ...state,
                loading: false,
                data:{
                    ...state.data,
                    [action.leagueName]: [action.payload.teams]
                },
                errorMsg: ""
            };

        case GET_LEAGUE_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "league not found"
            };
    default:
        return state
    }
}

export default LeagueReducer;