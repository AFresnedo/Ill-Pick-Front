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
            <Link className="anchorpad" to="/profile">Profile</Link>{' '}
          </span>
        );
    }
    else {
      links = (
          <span>
            <Link className="anchorpad" to="/login">Log In</Link>{' '}
            <Link className="anchorpad" to="/signup">Sign Up</Link>{' '}
          </span>
        );
    }
    return(
        <div>
          <nav className="orange darken-4">
          <a href="#" class="brand-logo center"><i class="material-icons left">local_dining</i> I'll Pick<i class="material-icons right">local_dining</i></a>
          <img className="brand-logo left logo" alt='burger' src={logo}/>
            <span className="right navpad">
            <Link className="anchorpad" to="/">Home</Link>{' '}
            {links}
            </span>
          </nav>
        </div>
      );
  }
}

export default Navbar;