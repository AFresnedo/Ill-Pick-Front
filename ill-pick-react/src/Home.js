import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';

const meals = [
  'spaghetti',
  'fish tacos',
  'burritos',
  'franks and beans',
  'noodles',
  'Dr. Pepper',
  'hamburgers',
  'hotdogs',
  'salad'
]

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'spaghetti'
    }
  }

  handleRandom = (e) => {
    e.preventDefault();
    console.log('step 1', this.state);
    axios.get(SERVER_URL + '/meals')
      .then( result => {
        console.log('SUCCESS', result)
      }).catch( err => {
        console.log('THERE WAS AN ERROR!')
      })
  }

  
  render() {
    return (
      <div className="">
        <h1>{this.state.name}</h1>
        <button className="random-search" onClick={this.handleRandom} >Try It!</button>
        
      </div>
    );
  }
}

export default Home;