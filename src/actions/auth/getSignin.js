import { GET_SIGNIN_ERROR, GET_SIGNIN_SUCCESS } from "../index";
import firebase from "../../config/firebase";

export const getSignin = (credentials, callback) => async (dispatch) => {
    try {
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({
                    type: GET_SIGNIN_SUCCESS
                });
                callback();
            })
            .catch(() => {
                dispatch({
                    type: GET_SIGNIN_ERROR,
                    payload: "Invalid login credentials."
                });
            });
        
    } catch(e) {
        dispatch ({
            type: GET_SIGNIN_ERROR,
            payload: "Invalid login credentials."
        });
    }
};