import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="">
        
        <button className="random-search" type="button">Try It!</button>
        
      </div>
    );
  }
}

export default Home;