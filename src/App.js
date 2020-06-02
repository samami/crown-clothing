import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Entrypage from "./pages/entrypage/entrypage.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shoppage} />
          <Route path="/entrypage" component={Entrypage} />
        </Switch>
      </div>
    );
  }
}

export default App;
