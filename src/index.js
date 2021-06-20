import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";

import firebase from "firebase";

import "./index.scss";

firebase.initializeApp({
  apiKey: "AIzaSyDinvbHTuvRjYzhEccsl5mZ7RDqXkKPXR0",
  authDomain: "znanir-cee19.firebaseapp.com",
  projectId: "znanir-cee19",
  storageBucket: "znanir-cee19.appspot.com",
  messagingSenderId: "607718186946",
  appId: "1:607718186946:web:375151fbdb3f0e6b64c05b",
  measurementId: "G-0KGHM5JX48",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export const Context = createContext(null);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Context.Provider
        value={{
          auth,
          firebase,
        }}>
        <App />
      </Context.Provider>
    </Provider>
  </Router>,
  document.getElementById("root"),
);
