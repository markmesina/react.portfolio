import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './../../containers/About';
import Navbar from '../../components/Navbar';
import Contact from './../../containers/Contact';
import Portfolio from './../../containers/Portfolio';
import Footer from './../../components/Footer'

const App = props => (
  <Router>
    <div>
    <Navbar/>
    <Route exact path ="/" component = {About}/>
    <Route exact path ="/Contact" component = {Contact}/>
    <Route exact path ="/Portfolio" component = {Portfolio}/>
    <Footer/>

    </div>
  </Router>
)
  export default App;