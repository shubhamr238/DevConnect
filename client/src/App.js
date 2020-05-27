import React from "react";
import "./App.css";

import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";
import Landing from "./components/layouts/landing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
