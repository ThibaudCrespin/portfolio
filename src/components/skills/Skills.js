import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import './skills.css';
import Details from '../details/Details';

class Skills extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Details title='Skills'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Details>
      </Fragment>
    );
  }
}

export default Skills;