import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/cart" component={CartPage} />

            <Route path="/products/:id" component={ProductPage} />
            <Route path="/products" component={ProductsPage} />

            <Route path="/categories/:id" component={ProductsPage} />

            <Route path="/" component={ProductsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
