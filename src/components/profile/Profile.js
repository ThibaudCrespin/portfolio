import React, { Component, Fragment } from 'react';
import './profile.css';
import Details from '../details/Details';

class Profile extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Details title='Profile'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Details>
      </Fragment>
    );
  }
}

export default Profile;