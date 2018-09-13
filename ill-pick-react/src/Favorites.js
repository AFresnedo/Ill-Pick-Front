import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Allfoods from './Allfoods';

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

class Favorites extends Component {


  render() {
    return (
      <div className="">
        <h1>Tell us about the foods you like!</h1>
        {meals.map( food => <Allfoods meals={food} />)}
        

      </div>
    );
  }
}

export default Favorites;