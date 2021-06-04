import React from "react";
import { Switch, Route } from "react-router-dom";

import { Book, Register, Auth } from "./pages/main";
import { Modal, Header } from "./components/main";

function App() {
  return (
    <div className="z-0 w-full h-screen">
      <header></header>
      <main>
        <Switch>
          <Route exact path="/">
            <Header />
            <Book />
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
