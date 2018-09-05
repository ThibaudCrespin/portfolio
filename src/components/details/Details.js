import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, NavLink } from 'react-router-dom';
import './details.css';

class Details extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='details'>
        <h1>{this.props.title}</h1>
        <div>{this.props.children}</div>
        <NavLink to="/" className="back"></NavLink>
      </div>
    );
  }
}

export default Details;