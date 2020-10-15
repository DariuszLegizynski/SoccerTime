  
import { GET_SIGNIN_SUCCESS, GET_SIGNIN_ERROR } from "../../actions/index";

const DefaultState = {
    // user: {},
    errorMsg: ""
};

const SigninReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case GET_SIGNIN_SUCCESS:
            return {
                ...state,
                // user: action.payload,
                errorMsg: ""
            };

        case GET_SIGNIN_ERROR:
            return {
                ...state,
                errorMsg: "Unable to sign in"
            };
    default:
        return state
    }
}

export default SigninReducer;