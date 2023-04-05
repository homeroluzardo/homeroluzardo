import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename="/">
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
