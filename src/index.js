import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

//styles
import "./index.css";

import store from './store';
import App from './components/App/App';

import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";

// import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

// import * as serviceWorker from './serviceWorker';
import registerServiceWorker from "./registerServiceWorker";

import fbConfig from "./config/fbConfig";

firebase.initializeApp(fbConfig);

//rrf stores authenticated users' data in Cloud Firestore
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  // enableLogging: false
}

const rrfProps = {
  firebase,
  config: rrfConfig, fbConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance
}

window.store = store;

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


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
registerServiceWorker();

