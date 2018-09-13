import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


class Navbar extends Component {
  handleLogout = (e) => {
    console.log('logging out...');
    e.preventDefault();
    localStorage.removeItem('mernToken');
    this.props.updateUser();
  }

  render() {
    let links = '';
    if(this.props.user){
      links = (
          <span>
            <a onClick={this.handleLogout}>Logout</a>
            <Link to="/profile" className="nav-links">Profile</Link>
          </span>
        );
    }
    else {
      links = (
          <span>
            <Link to="/login" className="nav-links">Log In</Link>
            <Link to="/signup" className="nav-links">Sign Up</Link>
          </span>
        );
    }
    return(
        <div>
          <nav className="navbar">
          	<span>
            <Link to="/">Home</Link>
            </span>
            {links}
          </nav>
        </div>
      );
  }
}

export default Navbar;