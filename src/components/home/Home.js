import React, { Component } from 'react';
import Tile from '../../components/tile/Tile';
import './home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      choice: 0
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {
    const theme = [
      {backgroundColor: 'navy',color: 'white'},
      {backgroundColor: 'red',color: 'black'},
      {backgroundColor: 'green',color: 'black'},
      {backgroundColor: 'yellow',color: 'black'},
      {backgroundColor: 'purple',color: 'white'}
    ];
  
    setInterval(() => {
      const tmp = this.getRandomInt(4);
      if(tmp !== this.state.choice){
        this.setState({
          choice: tmp
        });
      }
    }, 20000);

    const style = theme[this.state.choice];
    console.log(style, this.state.choice);

    return (
      <div id='home'>
        <Tile name='Projects' style={style}/>
        <Tile name='Skills' style={style}/>
        <Tile name='Socials' style={style}/>
        <Tile name='Languages' style={style}/>
        <Tile name='Certifications' style={style}/>
        <Tile name='Contact' style={style}/>
      </div>
    );
  }
}

export default Home;