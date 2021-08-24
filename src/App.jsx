import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./home-page/Home-Page";

function App() {
  return (
    <Router>
      <Route to="/" component={HomePage} />
    </Router>
  );
}

export default App;
