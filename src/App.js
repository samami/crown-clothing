import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Entrypage from "./pages/entrypage/entrypage.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
        <Route path="/entrypage" component={Entrypage} />
      </Switch>
    </div>
  );
}

export default App;
