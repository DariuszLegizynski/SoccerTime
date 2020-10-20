import { GET_SIGNOUT_SUCCESS, GET_SIGNOUT_ERROR } from "../../actions/index";

const DefaultState = {
    authMsg: ""
};

const SignoutReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case GET_SIGNOUT_SUCCESS:
            return {
                ...state,
                authMsg: "Bye Bye"
            };

        case GET_SIGNOUT_ERROR:
            return {
                ...state,
                authMsg: "No one simple leaves soccer-time"
            };
    default:
        return state
    }
}

export default SignoutReducer;