import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import store from './store';
import App from './components/App/App';

import firebase from 'firebase/app'
import "firebase/auth";
import 'firebase/database';
import "firebase/firestore";

import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { fbConfig } from "./config/fbConfig";

import registerServiceWorker from "./registerServiceWorker";

export const firebaseInit = firebase.initializeApp(fbConfig);
firebase.firestore();

//rrf stores authenticated users' data in Cloud Firestore
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  // enableLogging: false
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} >
      <ReactReduxFirebaseProvider {...rrfProps} >
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </BrowserRouter>,
  document.querySelector("#root")
);

registerServiceWorker();

