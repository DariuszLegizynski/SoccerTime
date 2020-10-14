import { GET_SIGNOUT_SUCCESS, GET_SIGNOUT_ERROR } from "../../actions/index";

const DefaultState = {
    authMsg: ""
};

const signoutReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case GET_SIGNOUT_SUCCESS:
            return {
                ...state,
                authMsg: action.payload
            };

        case GET_SIGNOUT_ERROR:
            return {
                ...state,
                authMsg: action.payload
            };
    default:
        return state
    }
}

export default signoutReducer;