import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './tile.css';

class Tile extends Component {

  render() {

    return (
      <Link to={`/${this.props.name.toLowerCase()}`}>
        <div className='tile' style={this.props.style}>
          <h1>{this.props.name}</h1>
        </div>
      </Link>
    );
  }
}

export default Tile;