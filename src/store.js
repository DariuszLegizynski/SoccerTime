import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import { getFirebase } from 'react-redux-firebase';
import { getFirestore } from "redux-firestore";

import rootReducer from './reducers/rootReducer';

const middlewares = [
    thunk.withExtraArgument(getFirebase, getFirestore)
  ];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;