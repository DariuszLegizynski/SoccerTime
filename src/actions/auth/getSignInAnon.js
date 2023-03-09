import { GET_SIGNIN_ANON_ERROR, GET_SIGNIN_ANON_SUCCESS } from "../index";
import firebase from "firebase/compat/app";

export const getSignInAnon = () => async (dispatch) => {

    try {
        firebase
            .auth()
            .signInAnonymously()
            .then(() => {
                dispatch({
                    type: GET_SIGNIN_ANON_SUCCESS
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_SIGNIN_ANON_ERROR,
                    error
                });
            });
        
    } catch(error) {
        dispatch ({
            type: GET_SIGNIN_ANON_ERROR,
            error
        });
    }
};