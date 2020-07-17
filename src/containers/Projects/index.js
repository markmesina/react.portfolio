import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', fontWeight:'bold', height: '176px', background: 'url(https://serving.photos.photobox.com/17497766c86f88c5716e9985d25a63b24e0e2c44e566a20ae343518919027307b2833666.jpg) center / cover'}} >Fridge Raider</CardTitle>
            <CardText>
            • An app that takes in the user’s current food items in the fridge via user input and uses that data to do a search for possible recipes. The search is made by making an API request on EdamamAPI
            </CardText>	 
            <CardActions border>
              <Button colored as = 'a' href= 'https://github.com/adrianromero13/fridge.raider'
              target = '_blank'>GitHub</Button>
              <Button colored as = 'a' href = 'https://adrianromero13.github.io/fridge.raider/'
              target = '_blank'>Deployed Link</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle className = 'codefriender' style={{color: 'black', fontWeight:"bold", height: '176px',background: 'url(https://serving.photos.photobox.com/16053292b919834cbcab53b0d67614a114737545cc314ec6b51b3ec896a2e873284d04eb.jpg) center / cover'}} >CodeFriender</CardTitle>
            <CardText>
            •	An app that requires users to sign up and matches them using their strengths and weaknesses on a subject to collaborate on further learning. The app features user matching, event planning and event messaging.
            </CardText>
            <CardActions border>
              <Button colored as ='a' href='https://github.com/adrianromero13/CodeFrienderAuth'
              target ='_blank'>GitHub</Button>
              <Button colored as ='a' href='https://codefriender-auth.herokuapp.com/'
              target = '_blank'>Deployed Link</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', fontWeight: 'bold', height: '176px', background: 'url(https://miro.medium.com/max/3780/1*o-9xgkkyBgkhnBVN_Wxs6Q.png) center / cover'}} >React Todo App</CardTitle>
            <CardText>
              A simple introduction App on how to build apps using React Redux and features the CRUD template. It features authorization, counter component and a todo component.
            </CardText>
            <CardActions border>
              <Button colored
              as = 'a'
              target = '_blank'
              href = 'https://github.com/markmesina/reduxTodo'>GitHub</Button>
              <Button colored
              as = 'a'
              target = '_blank'
              href = 'https://reduxtodo2020.herokuapp.com/'>Deployed Link</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className = 'projects-grid'>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.itch.zone/aW1hZ2UvMTgxNDI1Lzg0NzY2OS5wbmc=/original/ygxXL7.png) center / cover'}} >Bunny Defender</CardTitle>
            <CardText>
             Bunny Defender, an app which help players defend the world of bunnies! Try your best defeat the asteroids and save the world of bunnies.
            </CardText>	 
            <CardActions border>
              <Button colored as = 'a' href= 'https://github.com/markmesina/bunny.defender'
              target = '_blank'>GitHub</Button>
              <Button colored as = 'a' href = 'https://markmesina.github.io/bunny.defender/'
              target = '_blank'>Deployed Link</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://github.com/sayantanm19/js-music-player/blob/master/output/html-css.png?raw=true) center / cover'}} >Music Player</CardTitle>
            <CardText>
             A simple Music Player created in Vanilla JavaScript. Music is provided by an online link with basic functionalities such as: Play, Pause, Stop, Next and Rewind.
            </CardText>	 
            <CardActions border>
              <Button colored as = 'a' href= 'https://github.com/markmesina/js-musicplayer'
              target = '_blank'>GitHub</Button>
              <Button colored as = 'a' href = 'https://markmesina.github.io/js-musicplayer/'
              target = '_blank'>Deployed Link</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        
      )}
    // } else if(this.state.activeTab === 2) {
    //   return (
    //     <div><h1>This is Node</h1></div>
    //   )
    // } else if(this.state.activeTab === 3) {
    //   return (
    //     <div><h1>This is MongoDB</h1></div>
    //   )
    // }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          {/* <Tab>Node</Tab>
          <Tab>MongoDB</Tab> */}
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;