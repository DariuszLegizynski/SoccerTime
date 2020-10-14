  
import { GET_SIGNIN_SUCCESS, GET_SIGNIN_ERROR } from "../../actions/index";

const DefaultState = {
    authMsg: ""
};

const signinReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case GET_SIGNIN_SUCCESS:
            return {
                ...state,
                authMsg: action.payload
            };

        case GET_SIGNIN_ERROR:
            return {
                ...state,
                authMsg: action.payload
            };
    default:
        return state
    }
}

export default signinReducer;