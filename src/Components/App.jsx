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
        backgroundColor: 'var(--white)'
      }}>
        <Box sx={{
          height: '100%',
          width: '10%',
          position: 'absolute',
          paddingTop: '10px',
          backgroundColor: 'var(--pewter)'
        }}>
          <nav>
            <Button component={Link} to="/" className="linkButton" sx={{color: 'var(--black)'}}>Home</Button>
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
  return <Box sx={{
    width: '100%',
    height: 'auto',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '10px'
  }}>
    <Typography variant="h2">About</Typography>
  </Box>
}

export default App;