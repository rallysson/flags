import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Country } from "../Country";
import { Header } from "../Header";

import "./app.scss";

function App(): ReactElement {
  return (
    <div data-testid="app" className="app">
      <Header />
      <main className="app__main">
        <Switch>
          <Route exact component={Home} path="/" />
          <Route component={Country} path="/flags/:country" />
        </Switch>
      </main>
    </div>
  );
}

export { App };
