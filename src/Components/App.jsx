import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Box, Button, Typography } from '@mui/material';
import ResourceTracker from './ResourceTracker.jsx';

const App = function() {

  return (
    <Router>
      <Box id="all" sx={{
        position: 'relative',
        backgroundColor: 'var(--white)',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
      }}>
        <Box sx={{
          height: '100%',
          width: '10%',
          position: 'absolute',
          paddingTop: '10px',
          backgroundColor: 'var(--pewter)'
        }}>
          <nav>
            {/* TODO: set up text=overflow for the buttons to stop weird wrapping */}
            <Button component={Link} to="/" className="linkButton" sx={{color: 'var(--black)', textOverflow: 'ellipses'}}>Home</Button>
            <Button component={Link} to="/resource-tracker" className="linkButton" sx={{color: 'var(--black)'}}>Resource Tracker</Button>
            <Button component={Link} to="/about" className="linkButton" sx={{color: 'var(--black)'}}>About</Button>
          </nav>
        </Box>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resource-tracker">
            <ResourceTracker />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
};

function Home() {
  return <Box sx={{
    width: '100%',
    height: 'auto',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '10px'
  }}>
    <Typography variant="h2">Home</Typography>
  </Box>
}

function About() {
  return (
    <Box id="aboutPage" sx={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      position: 'absolute',
      paddingTop: '10px',
      color: 'var(--black)'
    }}>
      <Typography variant="h2" sx={{position: 'fixed'}} component="h2">About</Typography>
      <Box sx={{
        // boxShadow: '0px 1px 3px -1px black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        width: '45vw',
        height: '100%',
        textAlign: 'center',
        paddingTop: '10px'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyingContent: 'center',
          alignContent: 'center'
        }}>
          <Box id="aboutDetails">
          <Typography variant="body1">Hey, I'm Josh! Thanks for checking out my website. I use it to put up appplications to handle some of the math my players might find at the table when I'm Game Mastering for them. Maybe you'll find it useful too. I'll be adding a variety of different resources over time, both system agnostic and for systems that I use for my games. I'll also be adding some resouces for the tabletop game I'm designing, Ratcatchers, a grit-your-teeth fantasy role playing game about adventurers who risk their life in the mud and dirt for their chance at fame and fortune, or at least enough coin for their next drink.

          <br/><br/>I'm also looking for a job! If you're looking to hire me as a full stack software engineer, you can reach me at josh.barnes@gmail.com!</Typography>
          </Box>
        </Box>
        </ Box>
    </Box>
  )
}

export default App;