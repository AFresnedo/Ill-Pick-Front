import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css'
import Navbar from './Navbar'
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import logo from './burger.png';

class App extends Component {
  render() {
    return (
	   	<Router>
  	    <div className="layout">
  	      <Navbar />
    	    <Route path="/login" component={Login} />
      	  <Route path="/signup" component={Signup} />
      		<Route exact path="/" component={Home} />
	      </div>
	   	</Router>
    );
  }
}

export default App;
