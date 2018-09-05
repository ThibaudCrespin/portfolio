import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Tile from '../../components/tile/Tile';
import './home.css';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id='home'>
        <Tile name='Projects'/>
        <Tile name='Skills'/>
        <Tile name='Socials'/>
        <Tile name='Languages'/>
        <Tile name='Certifications'/>
        <Tile name='Contact'/>
      </div>
    );
  }
}

export default Home;