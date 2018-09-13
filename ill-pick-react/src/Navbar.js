import React, { Component } from 'react';
import './App.css';

class Navbar extends Component {
  render() {
    return (
      <div className="layout">
      	<nav>
      		<img src="http://www.fillmurray.com/140/100" className="logo-image" />
      		<a href="#" className="nav-link">Home</a>
      		<a href="#" className="nav-link">Login</a>
      		<a href="#" className="nav-link">Sign up</a>
      	</nav>
        
      </div>
    );
  }
}

export default Navbar;