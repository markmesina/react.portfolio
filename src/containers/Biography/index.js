import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Biography extends Component {
  render() {
    return(
      <div><h1>Biography</h1>
        <div>
          <Grid className="demo-grid-1">
            <Cell col={4}>
              <h2> About Me </h2>
            </Cell>
            <Cell col={4}>
              <h2> Education </h2>
            </Cell>
            <Cell col={4}>
              <h2> Work Experience </h2>
            </Cell>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Biography;