import { GET_SIGNOUT_ERROR, GET_SIGNOUT_SUCCESS } from "../index";
import { firebaseInit } from "../../index";

export const getSignout = () => async (dispatch) => {
    try {
        firebaseInit
            .auth()
            .signOut()
            .then(() => {
                dispatch ({
                    type: GET_SIGNOUT_SUCCESS
                });
            }
    )
    .catch(() => {
        dispatch({
            type: GET_SIGNOUT_ERROR,
            payload: "Something went wrong, we couldn't sign you out. Please try again."
        });
    });
        
    } catch(e) {
        dispatch ({
            type: GET_SIGNOUT_ERROR,
            payload: "Something went wrong, we couldn't sign you out. Please try again."
        });
    }
};