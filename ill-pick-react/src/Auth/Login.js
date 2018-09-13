import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constants/server';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange = (e) => { this.setState({ email: e.target.value }); }

  handlePasswordChange = (e) => { this.setState({ password: e.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    axios.post(SERVER_URL + '/auth/login', this.state)
    .then(result => {
      // Add the newly received token to LS
      localStorage.setItem('mernToken', result.data.token);
      // Update the user with a call to App.js
      this.props.updateUser();
    })
    .catch(err => {
      console.log('ERROR', err.response.data);
    });
  }

  render() {
    if(this.props.user){
      return (<Redirect to="/profile" />);
    }
    return(
      <div className="container">
        <h2 className="center-align">Login as an existing user</h2>
        <form className="editform" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <label for="Email">Email:</label>
              <input name="Email" placeholder="What is your email?" value={this.state.email} onChange={this.handleEmailChange} />
            </div>
            <div className="input-field col s12">
              <label for="Password">Password:</label>
              <input name="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
            </div>
            <button class="btn waves-effect waves-light amber right" type="submit" name="action">Submit
              <i class="material-icons right">send</i>
            </button>
          </div>
        </form>            
      </div>
      );
  }
}

export default Login;


{/*<div class="container">
  <h2 class="center-align form-text-white">Edit Profile</h2>
  <form id="edit-profile" class="editform" action="/profile/edit" method="PUT">
    <div class="row">
      <div class="input-field col s12 m6">
        <label for="firstname">First Name</label>
        <input type="text" value="<%= userData.firstname%>" id="firstname" name="firstname" class="validate form-text-white" required>
      </div>
      <div class="input-field col s12 m6">
        <label for="lastname">Last Name</label>
        <input type="text" value="<%= userData.lastname%>" id="lastname" name="lastname" class="validate form-text-white" required>
      </div>
      <div class="input-field col s12 m6">
        <label for="image">Profile Picture</label>
        <input type="url" value="<%= userData.image%>" class="form-text-white"  id="image" name="image">
      </div>
      <div class="input-field col s12 m6">
        <label for="email">Email</label>
        <input type="email" value="<%= userData.email%>"  id="email" name="email" class="validate form-text-white" required>
      </div>
      <button class="btn waves-effect waves-light grey right" type="submit" name="action">Submit
        <i class="material-icons right">send</i>
      </button>
    </div>
  </form>
</div>*/}