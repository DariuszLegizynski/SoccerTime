import { GET_SIGNIN_SUCCESS, GET_SIGNIN_ERROR, GET_SIGNOUT_SUCCESS, GET_SIGNOUT_ERROR, GET_SIGNUP_SUCCESS, GET_SIGNUP_ERROR } from "../../actions/index";

const DefaultState = {
    authMsg: "",
    authenticated: false
};

const AuthReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case GET_SIGNUP_SUCCESS:
            return {
                ...state,
                authenticated: true,
                authMsg: "Your account was successfully created!"
            };

        case GET_SIGNUP_ERROR:
            return {
                ...state,
                authenticated: false,
                authMsg: "Something went wrong, we couldn't create your account. Please try again."
            };

        case GET_SIGNIN_ERROR:
            return {
                ...state,
                authenticated: false,
                authMsg: "Unable to login"
            };
        case GET_SIGNIN_SUCCESS:
            return {
                ...state,
                authenticated: true,
                authMsg: "login success"
            };

        case GET_SIGNOUT_SUCCESS:
            return {
                ...state,
                authenticated: false,
                authMsg: "Bye Bye"
            };

        case GET_SIGNOUT_ERROR:
            return {
                ...state,
                authenticated: true,
                authMsg: "No one simple leaves soccer-time"
            };
    default:
        return state
    }
}

export default AuthReducer;