import { GET_SIGNUP_SUCCESS, GET_SIGNUP_ERROR } from "../../actions/index";

const DefaultState = {
    authMsg: ""
};

const SignupReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case GET_SIGNUP_SUCCESS:
            return {
                ...state,
                authMsg: action.payload
            };

        case GET_SIGNUP_ERROR:
            return {
                ...state,
                authMsg: action.payload
            };
    default:
        return state
    }
}

export default SignupReducer;