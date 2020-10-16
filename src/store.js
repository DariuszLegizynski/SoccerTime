import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import firebase from "firebase/app";

import { getFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from "redux-firestore";
import fbConfig from "./config/fbConfig";

import rootReducer from './reducers/rootReducer';

const middlewares = [
    thunk.withExtraArgument({getFirebase, getFirestore})
  ];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares), reduxFirestore(firebase, fbConfig)));

export default store;