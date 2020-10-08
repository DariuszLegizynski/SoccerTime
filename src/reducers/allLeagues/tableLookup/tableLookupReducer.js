import { GET_TABLELOOKUP_LOADING, GET_TABLELOOKUP_FAIL, GET_TABLELOOKUP_SUCCESS } from "../../../actions/index";

const DefaultState = {
    loading: false,
    data: {},
    errorMsg: ""
};

const TableLookupReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case GET_TABLELOOKUP_LOADING:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };

        case GET_TABLELOOKUP_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "failed to load the league's table"
            };

        case GET_TABLELOOKUP_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.table,
                errorMsg: ""
            };
    default:
        return state
    }
}

export default TableLookupReducer;