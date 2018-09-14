import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Allfoods from './Allfoods';
import axios from 'axios';
import SERVER_URL from './constants/server';

const meals = [
  'Spaghetti',
  'Fish Tacos',
  'Burritos',
  'Franks and Beans',
  'Noodles',
  'Dr. Pepper',
  'Hamburgers',
  'Hotdogs',
  'Salad'
]

let faveArr = [];

class Favorites extends Component {
  constructor(props){
    super(props);
    this.state = {
      faves: null,
    };
  }

  handleAddFave = (e) => {
    e.preventDefault();
    faveArr.push(e.target.value);
    //console.log(faveArr);
  } 

  handleUserFave = (e) =>{
    e.preventDefault();
    axios.post(SERVER_URL + '/users/setFaves')
      .then( faves =>{
        console.log(faveArr)
      })
  }


  render() {

    return (
      <div className="container">
        <div className="favorites center">
          <h1>Tell us about the foods you like!</h1>
          <div className="favorites-list">
            { meals.map( food => <Allfoods meals={food}  addItem={this.handleAddFave} />)}            
          </div>
          
          <button class="btn waves-effect waves-light amber submit" type="submit" name="action" onClick={this.handleUserFave}>Submit
            <i class="material-icons right">send</i>
          </button>       
        </div>
      </div>
    );
  }
}

export default Favorites;