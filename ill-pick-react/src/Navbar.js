import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
      	<Router>
      	<div>
      		<nav>
	      		<img src="http://www.fillmurray.com/140/100" className="logo-image" />
	      		<Link to="/" className="nav-link">Home</Link>
	      		<Link to="/login" className="nav-link">Login</Link>
	      		<Link to="/signup" className="nav-link">Sign up</Link>
	      	</nav>
	      	<Route exact path="/" component={Home} />
	      	<Route path="/login" component={Login} />
	      	<Route path="/signup" component={Signup} />
	    </div>
      	</Router>
        
      </div>
    );
  }
}

export default Navbar;