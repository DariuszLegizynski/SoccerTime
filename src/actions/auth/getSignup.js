import { GET_SIGNUP_ERROR, GET_SIGNUP_SUCCESS } from "../index";
import { firebaseInit } from "../../index";

export const getSignup = (newUser) => async (dispatch) => {
    try {
        firebaseInit
            .auth()
            .createUserWithEmailAndPassword(
                newUser.email,
                newUser.password
            )
            .then(() => {
                dispatch({
                    type: GET_SIGNUP_SUCCESS,
                    payload: "Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox."
                });
            })
            .catch((err) => {
                dispatch({
                    type: GET_SIGNUP_ERROR,
                    payload: "Something went wrong, we couldn't create your account. Please try again."
                });
            });

        
    } catch(e) {
        dispatch ({
            type: GET_SIGNUP_ERROR,
            payload: "Something went wrong, we couldn't create your account. Please try again."
        });
    }
};
