import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from './constants/server';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }

  handleFavorite = (e) => {
    e.preventDefault();
    console.log('step 1', this.state);
    axios.get(SERVER_URL + '/users/RandFave')
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
    if(this.props.user){
      return (
      <div className="container">
        <div className="home row">
        	<div className="col s12 center">
        		<h3>Press the "Try it! button to get a favorite dish!</h3>
        		<h1 className="">{this.state.name}</h1>
        		<br />

		        <button class="btn waves-effect waves-light amber tryit" type="submit" onClick={this.handleFavorite}>Get a fav!</button>        		
        	</div>
        </div>        
      </div>
        );
    }
    return(
      <div>
        <p>This is a profile page. You must be logged in to see it.</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
      );
  }
}

export default Profile;
