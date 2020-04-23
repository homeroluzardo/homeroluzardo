import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../src/styles/App.css";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
