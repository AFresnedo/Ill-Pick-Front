import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import logo from './burger.png';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">

        <div>
          <div>
         		<nav className="navbar">
          		<img src={logo} className="navlink logo-image" />
          		<Link to="/" className="navlink">Home</Link>
          		<Link to="/login" className="navlink">Login</Link>
          		<Link to="/signup" className="navlink">Sign up</Link>
          	</nav>            
          </div>

        </div>

        
      </div>
    );
  }
}

export default Navbar;