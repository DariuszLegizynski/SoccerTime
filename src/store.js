import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import { getFirebase } from 'react-redux-firebase';

import rootReducer from './reducers/rootReducer';

const middlewares = [
    thunk.withExtraArgument({ getFirebase })
  ];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;