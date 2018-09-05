import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import './socials.css';
import Details from '../details/Details';

class Socials extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Details title='Socials'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Details>
      </Fragment>
    );
  }
}

export default Socials;