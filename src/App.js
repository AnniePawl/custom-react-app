// IMPORTS
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home/Home'
import About from './About/About'
import './App.css'




function App() {
  return (
    <div className="App">
      <Router>


        <Route path="/" >
          <Home />
        </Route>


        <Route path="/About" component={About} ></Route>

      </Router >
    </div>
  );
}

export default App
