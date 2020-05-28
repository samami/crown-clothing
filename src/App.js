import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shop/shop.component";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={Shoppage} />
    </Switch>
  );
}

export default App;
