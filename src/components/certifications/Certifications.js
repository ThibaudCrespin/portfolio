import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import styles from './certifications.css';
import Details from '../details/Details';

class Certifications extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Details title='Certifications' className={styles}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Details>
      </Fragment>
    );
  }
}

export default Certifications;