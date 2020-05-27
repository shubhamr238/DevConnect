import React from "react";
import "./App.css";

import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";
import Landing from "./components/layouts/landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
