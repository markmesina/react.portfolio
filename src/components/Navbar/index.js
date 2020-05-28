import React from 'react';
import {Link} from 'react-router-dom';
import "./../../styles/style.css";
// import About from './../../containers/About';



const Navbar = props => (

        <div className="container" id = 'navbar'>
        <nav className="navbar fixed-top navbar-dark bg-dark">
          <a className="navbar-brand mb-0 h1">Mark Mesina</a>
            <div className="nav justify-content-end">
              <Link className="navbar-brand" to="/">About Me</Link>
              <Link className="navbar-brand">|</Link>
              <Link className="navbar-brand" to='/Portfolio'>Portfolio</Link>
              <Link className="navbar-brand">|</Link>
              <Link className="navbar-brand" to="/Contact">Contact</Link>
            </div>
        </nav>
    </div>

)

export default Navbar;