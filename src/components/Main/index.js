import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './../../containers/Homepage';
import Biography from './../../containers/Biography';
import Contact from './../../containers/Contact';
import Projects from './../../containers/Projects';
// import Resume from './resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/biography" component={Biography} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    {/* <Route path="/resume" component={Resume} /> */}
  </Switch>
)

export default Main;