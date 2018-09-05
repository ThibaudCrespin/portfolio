import React, { Component, Fragment } from 'react';
import './languages.css';
import Details from '../details/Details';

class Languages extends Component {
  
  render() {
    return (
      <Fragment>
        <Details title='Languages'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Details>
      </Fragment>
    );
  }
}

export default Languages;