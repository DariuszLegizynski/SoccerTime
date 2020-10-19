// import { GET_SIGNUP_ERROR, GET_SIGNUP_SUCCESS } from "../index";
import { auth, firestore } from "firebase";

export const getSignup = newUser => {
    return async dispatch => {
        const db = firestore();

        auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(newUser => {
            console.log(newUser);
        })
        .catch((error) => {
            console.log(error);
        })
    }
}


// export const getSignup = (newUser) => async (dispatch, getFirebase) => {
//     const firebase = getFirebase();
//     try {
//         firebase
//             .auth()
//             .createUserWithEmailAndPassword(
//                 newUser.email,
//                 newUser.password
//             )
//             .then(() => {
//                 dispatch({
//                     type: GET_SIGNUP_SUCCESS,
//                     payload: "Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox."
//                 });
//             })
//             .catch((err) => {
//                 dispatch({
//                     type: GET_SIGNUP_ERROR,
//                     payload: "Something went wrong, we couldn't create your account. Please try again."
//                 });
//             });

        
//     } catch(e) {
//         dispatch ({
//             type: GET_SIGNUP_ERROR,
//             payload: "Something went wrong, we couldn't create your account. Please try again."
//         });
//     }
// };
