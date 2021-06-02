import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

import "./index.css";

// * подключение к firebase
var firebaseConfig = {
  apiKey: "AIzaSyDpKzL04kSeStk99aE858eXOD1DGgbcbI8",
  authDomain: "asds-3e86f.firebaseapp.com",
  projectId: "asds-3e86f",
  storageBucket: "asds-3e86f.appspot.com",
  messagingSenderId: "302242037593",
  appId: "1:302242037593:web:a4d1a40326eca1287cd648",
  measurementId: "G-N12RF9KGHK",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export const Context = createContext(null);

ReactDOM.render(
  <Router>
    <Context.Provider
      value={{
        auth,
        firebase,
        firestore,
      }}>
      <App />
    </Context.Provider>
  </Router>,
  document.getElementById("root"),
);
