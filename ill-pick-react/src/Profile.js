import React, { Component } from 'react';

class Profile extends Component {


  render() {
    if(this.props.user){
      return (
          <div>
            <button className="random-search" type="button">Try It!</button>
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
