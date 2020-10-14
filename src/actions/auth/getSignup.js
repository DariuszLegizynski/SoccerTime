import { GET_SINGUP_ERROR, GET_SIGNUP_SUCCESS } from "../index";
import firebase from "../../apis/firebase";

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
                    type: GET_SIGNUP_SUCCESS,
                    payload: "Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox."
                });
            })
            .catch((err) => {
                dispatch({
                    type: GET_SINGUP_ERROR,
                    payload: "Something went wrong, we couldn't create your account. Please try again."
                });
            });

        
    } catch(e) {
        dispatch ({
            type: GET_SINGUP_ERROR,
            payload: "Something went wrong, we couldn't create your account. Please try again."
        });
    }
};