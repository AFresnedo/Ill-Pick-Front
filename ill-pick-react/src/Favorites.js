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

class Favorites extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
      faves: [],
    };
  }

  handleAddFave = (e) => {
    const newFaves = this.state.faves;
    newFaves.push(e.target.value);
    console.log('old faves:', this.state.faves);
    console.log('new faves:', newFaves);
    this.setState({
      faves: newFaves
    })
  }

  handleUserFave = (e) =>{
    axios.post(SERVER_URL + '/users/setFaves', this.state)
      .then( faves =>{
        console.log('YAY!')
      }).catch( err => {
        console.log('THE WAS AN ERROR')
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
