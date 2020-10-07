import { GET_ALL_COUNTRIES_LOADING, GET_ALL_COUNTRIES_SUCCESS, GET_ALL_COUNTRIES_FAIL } from "../../actions/index";

const DefaultState = {
    loading: false,
    data: [],
    errorMsg: ""
};

const AllCountriesReducer = (state = DefaultState, action) => {
    switch (action.type){
        case GET_ALL_COUNTRIES_LOADING:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };

        case GET_ALL_COUNTRIES_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "unable to get all the Countries"
            };

        case GET_ALL_COUNTRIES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: {
                    ...state.data,
                    countries: action.payload.countries
                },
                errorMsg: ""
            };
        default:
            return state;
    }
}

export default AllCountriesReducer;