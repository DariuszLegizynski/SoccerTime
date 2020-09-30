import {GET_ENGLISH_LEAGUE_LOADING, GET_ENGLISH_LEAGUE_SUCCESS, GET_ENGLISH_LEAGUE_FAIL} from "../../../actions/index";

const DefaultState = {
    loading: false,
    data: [],
    errorMsg: ""
};

const EnglishLeagueReducer = (state = DefaultState, action) => {
    switch (action.type){
        case GET_ENGLISH_LEAGUE_LOADING:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
            case GET_ENGLISH_LEAGUE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                errorMsg: ""
            };
            case GET_ENGLISH_LEAGUE_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "unable to get the english league"
            };
        default:
            return state;
    }
}

export default EnglishLeagueReducer;