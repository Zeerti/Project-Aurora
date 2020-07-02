import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";


function App() {
  return (
    <Router>
      <div className="App bg-nord0">
        <Navbar />
        <Landing />
      </div>
    </Router>
  );
}

export default App;