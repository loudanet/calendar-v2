import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Nav from "./nav.jsx";
import About from "./about.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <div><Nav/><Outlet/></div> }>
          <Route index element={ <p>Hewwo!</p> } />
          <Route path="about" element={ <About/> } />
          <Route path="*" element={ <p>The classic, error 404!</p> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
