import { GET_SIGNIN_ERROR, GET_SIGNIN_SUCCESS } from "../index";
import { firebaseInit } from "../../index";

export const getSignin = (credentials) => async (dispatch) => {
    console.log(credentials);
    try {
        firebaseInit
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({
                    type: GET_SIGNIN_SUCCESS
                });
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