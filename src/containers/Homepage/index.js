import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Homepage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQGzZz8D6dqW6A/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=2RA6I_c9KKoQ0_-D0AWeXUfHMnICPWms2yWw092dGzQ"
              alt="headshot"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | MongoDB | Express | React | Redux | NodeJS</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/mark-mesina-005911126/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/markmesina" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a> */}

          {/* Youtube */}
          {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a> */}

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Homepage;