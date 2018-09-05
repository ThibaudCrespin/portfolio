import React, { Component, Fragment } from 'react';
import './projects.css';
import Details from '../details/Details';

class Projects extends Component {

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