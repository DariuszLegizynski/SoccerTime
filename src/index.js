import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import store from './store';
import App from './components/App/App';

import firebase from 'firebase/app'
import "firebase/auth";

import "firebase/firestore";
import { createFirestoreInstance } from "redux-firestore";

import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { fbConfig } from "./config/fbConfig";

import registerServiceWorker from "./registerServiceWorker";

const rrfConfig = {
  userProfile: "users"
}

firebase.initializeApp(fbConfig);
firebase.firestore();

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

