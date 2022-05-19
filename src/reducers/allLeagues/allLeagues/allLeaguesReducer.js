import {GET_ALL_LEAGUES_LOADING, GET_ALL_LEAGUES_SUCCESS, GET_ALL_LEAGUES_FAIL} from "../../../actions/index";

const DefaultState = {
    loading: false,
    data: {},
    errorMsg: ""
};

const AllLeaguesReducer = (state = DefaultState, action) => {
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
                data:{
                    ...state.data,
                    [action.countryName]: action.payload.countries
                },
                errorMsg: ""
            };
            case GET_ALL_LEAGUES_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "unable to get all the leagues"
            };
        default:
            return state;
    }
}

export default AllLeaguesReducer;

