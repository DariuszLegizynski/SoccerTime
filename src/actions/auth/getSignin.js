import { GET_SIGNIN_ERROR, GET_SIGNIN_SUCCESS } from "../index";

export const getSignin = (credentials) => async (dispatch, getState, {getFirebase}) => {
    console.log(credentials);
    const firebase = getFirebase();
    console.log(firebase);
    try {
        await firebase()
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
        
    } catch(e) {
        dispatch ({
            type: GET_SIGNIN_ERROR,
            payload: "Invalid login credentials."
        });
    }
};