import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Nav from "./nav.jsx";
import About from "./about.jsx";
import ErrorComponent from "./error.jsx";
import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <div><Nav/><Outlet/></div> }>
          <Route index element={ <div><p>Welcome to my page!</p><a href="http://localhost:5173/about">Let's go!</a></div> } />
          <Route path="about" element={ <About/> } />
          <Route path="*" element={ <ErrorComponent/> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
