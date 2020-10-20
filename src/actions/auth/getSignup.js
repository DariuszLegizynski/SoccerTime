import { GET_SIGNUP_ERROR, GET_SIGNUP_SUCCESS } from "../index";
import firebase from "firebase";

export const getSignup = (newUser) => async (dispatch) => {
    try {
        firebase
            .auth()
            .createUserWithEmailAndPassword(
                newUser.email,
                newUser.password
            )
            .then(() => {
                dispatch({
                    type: GET_SIGNUP_SUCCESS
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_SIGNUP_ERROR,
                    error
                });
            });

        
    } catch(error) {
        dispatch ({
            type: GET_SIGNUP_ERROR,
            error
        });
    }
};
