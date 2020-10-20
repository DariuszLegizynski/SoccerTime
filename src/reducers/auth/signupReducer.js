import { GET_SIGNUP_SUCCESS, GET_SIGNUP_ERROR } from "../../actions/index";

const DefaultState = {
    authMsg: null
};

const SignupReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case GET_SIGNUP_SUCCESS:
            return {
                ...state,
                authMsg: "Your account was successfully created!"
            };

        case GET_SIGNUP_ERROR:
            return {
                ...state,
                authMsg: "Something went wrong, we couldn't create your account. Please try again."
            };
    default:
        return state
    }
}

export default SignupReducer;