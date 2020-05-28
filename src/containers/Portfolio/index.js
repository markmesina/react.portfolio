import React from 'react';
import './../../styles/style.css';
import Niners from './../../assets/images/SF 49ers.jpg'
import Giants from './../../assets/images/SF Giants.jpg'
import Warriors from './../../assets/images/GS Warriors.jpg'

const Portfolio = props => (

<div className="container">

    <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
                <div className="view overlay">
                    <img src= {Niners} className="card-img-top"
                        alt=""/>
                    <a href="#">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                    </div>
                    <div className="card-body">
                    <h4 className="card-title">SF 49ers</h4>
                    <p className="card-text">The San Francisco 49ers are a professional American football team located in the San Francisco Bay Area. They compete in the National Football League as a member of the league's National Football Conference West division</p>
                    <a href="#" className="btn btn-indigo">Button</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
                <div className="view overlay">
                <img src= {Giants} className="card-img-top"
                    alt=""/>
                <a href="#">
                    <div className="mask rgba-white-slight"></div>
                </a>
                </div>
                <div className="card-body" id = "card-body">
                <h4 className="card-title">SF Giants</h4>
                <p className="card-text">The San Francisco Giants are an American professional baseball team based in San Francisco, California. They compete in Major League Baseball as a member club of the National League West division.</p>
                <a href="#" className="btn btn-indigo">Button</a>
                </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
                <div className="view overlay">
                <img src= {Warriors} className="card-img-top"
                    alt=""/>
                <a href="#">
                    <div className="mask rgba-white-slight"></div>
                </a>
                </div>
                <div className="card-body">
                <h4 className="card-title">GS Warriors</h4>
                <p className="card-text">The Golden State Warriors are an American professional basketball team based in San Francisco. The Warriors compete in the National Basketball Association, as a member of the league's Western Conference Pacific Division.</p>
                <a href="#" className="btn btn-indigo">Button</a>
                </div>
            </div>
        </div>
    </div>
  </div>
)

export default Portfolio