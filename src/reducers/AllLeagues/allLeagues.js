import {GET_ALL_LEAGUES_LOADING, GET_ALL_LEAGUES_SUCCESS, GET_ALL_LEAGUES_FAIL} from "../../actions/index";

const DefaultState = {
    loading: false,
    data: [],
    errorMsg: ""
};

const allLeagues = (state = DefaultState, action) => {
    switch (action.type){
        case GET_ALL_LEAGUES_LOADING:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
            case GET_ALL_LEAGUES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                errorMsg: ""
            };
            case GET_ALL_LEAGUES_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "unable to get the leagues"
            };
        default:
            return state;
    }
}

export default allLeagues;