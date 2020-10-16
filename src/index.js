import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import store from './store';
import App from './components/App/App';

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

import fbConfig from "./config/fbConfig";

import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import registerServiceWorker from "./registerServiceWorker";

const firebaseInit = firebase.initializeApp(fbConfig);
console.log(firebaseInit);
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

