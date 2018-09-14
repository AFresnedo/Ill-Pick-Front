import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';
import './App.css';
import './animate.css';
import Home from './Home';
import Login from './Auth/Login';
import Navbar from './Navbar';
import Profile from './Profile';
import Signup from './Auth/Signup';
import Favorites from './Favorites';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount = () => {
    console.log('component did mount!');
    this.getUser();
  }

  getUser = () => {
    var token = localStorage.getItem('mernToken');
    if(token){
      console.log('token found in LS', token);
      // There is a token in localStorage. Try to validate it!
      axios.post(SERVER_URL + '/auth/me/from/token', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        console.log('SUCCESS', response);
        this.setState({
          user: response.data.user
        });
      })
      .catch(err => {
        console.log('ERROR', err);
        console.log('response', err.response);
        localStorage.removeItem('mernToken');
        this.setState({
          user: null
        });
      });
    }
    else {
      console.log('No token was found');
      localStorage.removeItem('mernToken');
      this.setState({
        user: null
      });
    }
  }

  render() {
    return (
      <div>
        <Router>
          <div>

            <Navbar user={this.state.user} updateUser={this.getUser} />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={
              () => (<Login user={this.state.user} updateUser={this.getUser} />)
            } />
            <Route path="/signup" component={Signup}
            component={() => (<Signup user={this.state.user} updateUser={this.getUser} />)} 
            />
            <Route path="/profile" component={
              () => (<Profile user={this.state.user} />)
            } />
            <Route path="/favorites" component={
              () => (<Favorites user={this.state.user} />)
            } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

