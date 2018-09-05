import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import './projects.css';
import Details from '../details/Details';

class Projects extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Details title='Projects'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Details>
      </Fragment>
    );
  }
}

export default Projects;