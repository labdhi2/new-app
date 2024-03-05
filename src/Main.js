import React, { Component } from "react";
import {
  Routes, // Change Route to Routes
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Login from "./Login";
import Registration from "./Registration";
import Feedback from "./Feedback";
import './App.css';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="hederr">
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/Registration">Registration</NavLink></li>
            <li><NavLink to="/Feedback">Feedback</NavLink></li>
            
          </ul>
          </div>
          <div className="content">
            <Routes> {/* Wrap your Routes inside the Routes component */}
              <Route path="/" element={<Home />} />
              <Route path="/stuff" element={<Stuff />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Registration" element={<Registration />} />
              <Route path="/Feedback" element={<Feedback />} />
              

            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;