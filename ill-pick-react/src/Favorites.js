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
      <div className="container">
        <div className="favorites center">
          <h1>Tell us about the foods you like!</h1>
          <div className="favorites-list">
            { meals.map( food => <Allfoods meals={food} />)}            
          </div>
          
          <button class="btn waves-effect waves-light amber submit" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button>       
        </div>
      </div>
    );
  }
}

export default Favorites;