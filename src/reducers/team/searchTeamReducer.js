import { GET_SEARCH_TEAM_LOADING, GET_SEARCH_TEAM_SUCCESS, GET_SEARCH_TEAM_FAIL } from "../../actions/index";

const DefaultState = {
    loading: false,
    data: {},
    errorMsg: ""
};

const searchTeamReducer = (state = DefaultState, action) => {
    switch(action.type) {
        case GET_SEARCH_TEAM_LOADING:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };

        case GET_SEARCH_TEAM_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "team not found"
            };

        case GET_SEARCH_TEAM_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                errorMsg: ""
            };

        default:
            return state;
    }
}

export default searchTeamReducer;