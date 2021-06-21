import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  Cart,
  NewItems,
  Bestsellers,
  BestPrice,
  Recommendation,
  Authors,
  Book,
} from "./pages";
import { Header, Footer, HomeRoute } from "./components";

function App() {
  return (
    <div className="z-0 w-full h-screen">
      <Header />
      <main>
        <Switch>
          <Route exact path={["/", "/auth", "/register"]} component={HomeRoute} />
          <Route exact path="/newItems" component={NewItems} />
          <Route exact path="/bestsellers" component={Bestsellers} />
          <Route exact path="/bestPrice" component={BestPrice} />
          <Route exact path="/rec" component={Recommendation} />
          <Route exact path="/authors" component={Authors} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/book/:id" component={Book} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
