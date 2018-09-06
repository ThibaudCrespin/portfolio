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
      let tmp = this.getRandomInt(theme.length - 1);

      if(tmp !== this.state.choice){
        this.setState({
          choice: tmp
        });
      }
    }, 15000);

    const style = theme[this.state.choice];

    const picture = 'https://pbs.twimg.com/profile_images/833660824468254720/m2t2bSY5_400x400.jpg';

    return (
      <div id='home'>
        <Tile name='Thibaud Crespin' style={style}>
          <p>23 yo</p>
          <p>Nantes</p>
        </Tile>
        <Tile name='Picture' style={style} picture={picture}/>
        <Tile name='Projects' style={style}/>
        <Tile name='Skills' style={style}/>
        <Tile name='Socials' style={style}>
          <p>GitHub: ThibaudCrespin</p>
          <p>Twitter: thi_pas_baud</p>
          <p>LinkedIn: Thibaud Crespin</p>
        </Tile>
        <Tile name='Languages' style={style}>
          <p>English: Fluent</p>
          <p>German: Novice</p>
        </Tile>
        <Tile name='Certifications' style={style}/>
        <Tile name='Contact' style={style}>
          <p>thibaud.crespin@gmail.com</p>
          <p>(+33)647503861</p>
        </Tile>
      </div>
    );
  }
}

export default Home;