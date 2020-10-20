import { GET_SIGNIN_ERROR, GET_SIGNIN_SUCCESS } from "../index";
import firebase from "firebase/app";

export const getSignin = (credentials) => async (dispatch) => {

    try {
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({
                    type: GET_SIGNIN_SUCCESS
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_SIGNIN_ERROR,
                    error
                });
            });
        
    } catch(error) {
        dispatch ({
            type: GET_SIGNIN_ERROR,
            error
        });
    }
};