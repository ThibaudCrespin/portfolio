import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './tile.css';

class Tile extends Component {

  constructor() {
    super();
    this.state = {
      side: 'front'
    }
  }

  onMouseOver = (elem) => {
    this.setState({
      side: 'back'
    });
  }

  onMouseOut = (elem) => {
    this.setState({
      side: 'front'
    });
  }

  render() {
    let style = this.props.style;

    switch(this.props.name.toLowerCase()){
      case 'projects': 
        break;
      case 'picture': 
        style = {
          backgroundImage: `url(${this.props.picture})`,
          animation: 'none'
        };
        break;
      case 'contact': 
        break;
      case 'skills': 
        break;
      case 'languages & certifications': 
        break;
      case 'projects': 
        break;
      default: 
        break;
    }

    return (
      <Link to={`/${this.props.name.toLowerCase()}`}>
        {
          this.state.side === 'front' ? 
          <div className='tile front' style={style} onMouseOver={this.onMouseOver}>
            {!this.props.picture && <h1>{this.props.name}</h1>}
          </div> :
          <div className='tile back' style={style} onMouseLeave={this.onMouseOut}>
            {this.props.children && <Fragment>{this.props.children}</Fragment>}
          </div>
        }
      </Link>
    )
  }
}

export default Tile;