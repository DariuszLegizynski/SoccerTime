import { GET_SIGNOUT_ERROR, GET_SIGNOUT_SUCCESS } from "../index";
import firebase from "firebase/app";

export const getSignout = () => async (dispatch) => {
    try {
        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch ({
                    type: GET_SIGNOUT_SUCCESS
                });
            }
    )
    .catch((error) => {
        dispatch({
            type: GET_SIGNOUT_ERROR,
            error
        });
    });
        
    } catch(error) {
        dispatch ({
            type: GET_SIGNOUT_ERROR,
            error
        });
    }
};