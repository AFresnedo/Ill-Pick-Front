import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './burger.png';


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
            <Link to="/profile">Profile</Link>{' '}
          </span>
        );
    }
    else {
      links = (
          <span>
            <Link to="/login">Log In</Link>{' '}
            <Link to="/signup">Sign Up</Link>{' '}
          </span>
        );
    }
    return(
        <div>
          <nav className="orange darken-4">
          <img className="brand-logo left" alt='burger' src={logo}/>
            <span className="right navpad">
            <Link to="/">Home</Link>{' '}
            {links}
            </span>
          </nav>
        </div>
      );
  }
}

export default Navbar;