import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="home row">
        	<div className="col s12 center">
        		<h3>Press the "Try it! button to get a random dish!</h3>
        		<br />
        		<h1>SAMPLE TEXT</h1>
        		<br />

		        <button class="btn waves-effect waves-light amber" type="submit">Try it!</button>        		
        	</div>
        </div>        
      </div>
    );
  }
}

export default Home;