import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";
import Landing from "./components/layouts/landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { BrowserRouter as Router, Route } from "react-router-dom";

//redux imports
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
