import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import { Main, Register, Auth } from "./pages/main";
import { Modal } from "./components/main";

function App() {
  const links = [
    {
      name: "Вход",
      path: "/auth",
    },
    {
      name: "Регистрация",
      path: "/register",
    },
  ];

  return (
    <div className="z-0 w-full h-screen">
      <header>
        <ul className="flex p-3 space-x-2">
          <Link to="/">
            <li>Main</li>
          </Link>
          {links.map(({ name, path }, idx) => (
            <Link to={path} key={idx}>
              <li className="cursor-pointer">{name}</li>
            </Link>
          ))}
        </ul>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
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
