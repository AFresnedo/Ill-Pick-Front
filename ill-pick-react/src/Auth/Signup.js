import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css'
import axios from 'axios';
import SERVER_URL from '../constants/server';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      password: ''
    };
  }

  handleNameChange = (e) => { this.setState({ name: e.target.value }); }

  handlePasswordChange = (e) => { this.setState({ password: e.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post(SERVER_URL + '/auth/signup', this.state)
    .then(result => {
      console.log('SUCCESS!', result);
      // Add the newly received token to LS
      localStorage.setItem('mernToken', result.data.token);
      // Update the user with a call to App.js
      this.props.updateUser();
    })
    .catch(err => {
      console.log('ERROR', err);
    });
  }

  render() {
    if(this.props.user){
      return (<Redirect to="/favorites" />);
    }
    return(
        <div className="container">
          <h2 className="center-align">Signup as a new user</h2>
          <form className="editform" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <label for="Username">Username:</label>
                <input name="Username" type="text" value={this.state.name} onChange={this.handleNameChange} />
              </div>
              </div>
              <div className="row">
              <div className="input-field col s12">
                <label>Password:</label>
                <input name="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
              </div>
              <button class="btn waves-effect waves-light amber right" type="submit" name="action">Sign me up!
                <i class="material-icons right">send</i>
              </button>              
            </div>
          </form>
        </div>
      );
  }
}

export default Signup;
