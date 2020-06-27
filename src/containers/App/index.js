import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './../../containers/Homepage';
import Biography from './../Biography'
import Navbar from '../../components/Navbar';
import Contact from './../../containers/Contact';
import Portfolio from './../../containers/Portfolio';
import Footer from './../../components/Footer'

const App = props => (
  <Router>
    <Route exact path ="/" component = {Homepage}/>
    <Route exact path ="/biography" component = {Biography} />
    <Route exact path ="/contact" component = {Contact}/>
    <Route exact path ="/projects" component = {Portfolio}/>
    <Footer/>
  </Router>
)
  export default App;