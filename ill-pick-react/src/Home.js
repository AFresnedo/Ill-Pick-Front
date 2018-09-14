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
      name: ''
    }
  }

  handleRandom = (e) => {
    e.preventDefault();
    console.log('step 1', this.state);
    axios.get(SERVER_URL + '/meals/getRandom')
      .then( result => {
        console.log('SUCCESS', result)
        this.setState({
          name: result.data.name
        })
      }).catch( err => {
        console.log('THERE WAS AN ERROR!')
      })
    console.log('The name is: ', this.state.name)
  }

  
  render() {
    return (
      <div className="container">
        <div className="home row">
        	<div className="col s12 center">
        		<h3>Press the "Try it! button to get a random dish!</h3>
        		<h1 className="">{this.state.name}</h1>
        		<br />

		        <button class="btn waves-effect waves-light amber tryit" type="submit" onClick={this.handleRandom}>Try it!</button>        		
        	</div>
        </div>        
      </div>
    );
  }
}

export default Home;
