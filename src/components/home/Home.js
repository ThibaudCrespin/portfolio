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

    let style = theme[this.state.choice];

    const picture = 'https://pbs.twimg.com/profile_images/833660824468254720/m2t2bSY5_400x400.jpg';

    return (
      <div id='home'>
        <Tile name='Thibaud Crespin' style={style}>
          <h2>23 yo</h2>
          <h2>Nantes</h2>
        </Tile>
        <Tile name='Picture' style={style} picture={picture}/>
        <Tile name='Projects' style={style}>
          <h2>Available on GitHub</h2>
          <p>ng-2048</p>
          <p>slideshow</p>
          <p>particle</p>
          <p>git-mapper</p>
        </Tile>
        <Tile name='Skills' style={style}>
          <p>Angular & AngularJS</p>
          <p>Javascript</p>
          <p>PHP</p>
          <p>Git</p>
          <p>Docker</p>
          <p>Scrum Method</p>
        </Tile>
        <Tile name='Languages & Certifications' style={style}>
          <p>English: Fluent (TOEIC: 795)</p>
          <p>German: Novice</p>
          <p>Opquast: 825</p>
        </Tile>
        <Tile name='Contact' style={style}>
          <p>thibaud.crespin@gmail.com</p>
          <p>(+33)647503861</p>
          <p>GitHub: ThibaudCrespin</p>
          <p>Twitter: thi_pas_baud</p>
          <p>LinkedIn: Thibaud Crespin</p>
        </Tile>
      </div>
    );
  }
}

export default Home;