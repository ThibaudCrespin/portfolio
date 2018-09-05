import React, { Component, Fragment } from 'react';
import './contact.css';
import Details from '../details/Details';

class Contact extends Component {

  render() {
    return (
      <Fragment>
        <Details title='Contact'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Details>
      </Fragment>
    );
  }
}

export default Contact;