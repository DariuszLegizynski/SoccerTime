import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";

import firebase from "./apis/firebase";
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({getFirebase})),
    reactReduxFirebase(firebase)
    ));

export default store;