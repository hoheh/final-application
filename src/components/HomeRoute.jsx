import React from "react";
import { Route } from "react-router-dom";

import { Main, Auth, Register } from "../pages";
import { Modal } from "../components";

const HomeRoute = () => {
  return (
    <div>
      <Route path="/">
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
    </div>
  );
};

export default HomeRoute;
