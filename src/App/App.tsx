import React from "react";
import "./App.css";
import Homepage from "../Homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/pl" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
