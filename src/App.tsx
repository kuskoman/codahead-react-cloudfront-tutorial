import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./pages/About/About";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              Link to <Link to="/">Home</Link>
            </li>
            <li>
              Link to <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

export default App;
