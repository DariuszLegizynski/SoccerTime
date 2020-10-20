  
import { GET_SIGNIN_SUCCESS, GET_SIGNIN_ERROR } from "../../actions/index";

const DefaultState = {
    authMsg: ""
};

const SigninReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case GET_SIGNIN_ERROR:
            return {
                ...state,
                authMsg: "Unable to login"
            };
        case GET_SIGNIN_SUCCESS:
            return {
                ...state,
                authMsg: "login success"
            };
    default:
        return state
    }
}

export default SigninReducer;