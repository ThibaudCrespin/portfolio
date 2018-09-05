import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from './components/home/Home';
import Certifications from './components/certifications/Certifications';
import Profile from './components/profile/Profile';
import Projects from './components/projects/Projects';

class Routes extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/certifications'} component={Certifications}/>
          <Route exact path={'/profile'} component={Profile}/>
          <Route exact path={'/projects'} component={Projects}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default Routes;