import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
          </ul>

          <Route exact path="/" component={ProductsPage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route path="/products/:id" component={ProductPage} />
          <Route path="/categories/:id" component={ProductsPage} />
        </div>
      </Router>
    );
  }
}

export default App;
