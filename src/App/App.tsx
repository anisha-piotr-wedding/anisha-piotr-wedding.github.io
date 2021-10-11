import React from "react";
import "./App.css";
import Homepage from "../Homepage";
import Invite from "../Invite";
import InPersonInvite from "../InPersonInvite";
import SecretCode from "../SecretCode";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route
          exact={true}
          path="/pl"
          component={() => <Homepage language="pl" />}
        />
        <Route
          exact={true}
          path="/guj"
          component={() => <Homepage language="guj" />}
        />
        <Route exact={true} path="/invite" component={Invite} />
        <Route
          exact={true}
          path="/guj/invite"
          component={() => <Invite language="guj" />}
        />
        <Route
          exact={true}
          path="/pl/invite"
          component={() => <Invite language="pl" />}
        />
        <Route exact={true} path="/details" component={InPersonInvite} />
        <Route
          exact={true}
          path="/guj/details"
          component={() => <InPersonInvite language="guj" />}
        />
        <Route
          exact={true}
          path="/pl/details"
          component={() => <InPersonInvite language="pl" />}
        />
        <Route exact={true} path="/eVtuO35LP" component={SecretCode} />
        <Route
          exact={true}
          path="/pl/eVtuO35LP"
          component={() => <SecretCode language="pl" />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
