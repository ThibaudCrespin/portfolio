import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from './components/home/Home';
import Certifications from './components/certifications/Certifications';
import Socials from './components/socials/Socials';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Languages from './components/languages/Languages';

class Routes extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/certifications'} component={Certifications}/>
          <Route exact path={'/socials'} component={Socials}/>
          <Route exact path={'/projects'} component={Projects}/>
          <Route exact path={'/skills'} component={Skills}/>
          <Route exact path={'/contact'} component={Contact}/>
          <Route exact path={'/languages'} component={Languages}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default Routes;