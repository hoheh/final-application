import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import { Main, Register, Auth } from "./pages/main";
import { Modal, Header } from "./components/main";

function App() {
  const links = [
    {
      name: "Вход",
      path: "auth",
    },
    {
      name: "Регистрация",
      path: "register",
    },
  ];

  return (
    <div className="z-0 w-full h-screen">
      <header></header>
      <main>
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
          </Route>
          <Route exact path="/auth">
            <Modal>
              <Auth />
            </Modal>
          </Route>
          <Route exact path="/register">
            <Modal>
              <Register />
            </Modal>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
