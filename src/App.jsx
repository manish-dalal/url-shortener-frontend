import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import Home from "./Home";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
