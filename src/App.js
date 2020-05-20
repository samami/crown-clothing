import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/hats" component={HatsPage} />
    </Switch>
  );
}

export default App;
