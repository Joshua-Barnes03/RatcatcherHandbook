import React, { useState, useEffect } from 'react';
import Resource from './Resource.jsx';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ResourceTracker = function() {

  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState('');

  const handleChange = (event) => {
    setNewResource(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var temp = resources.slice();
    temp.push(
      {
        name: newResource,
        start: 0,
        input: 0,
        output: 0,
        days: 0
      }
    );
    setResources(temp);
    setNewResource('')
  }

  useEffect(() => {

  }, [resources]);

  return (
    <Box id="resourceTracker" sx={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    }}>
      <Box sx={{
        // boxShadow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        width: '60vw',
        height: 'auto',
        textAlign: 'center'
      }}>
        <h2>Resource Tracker</h2>

        <div id="trackerArea">
          {resources.map((resource, i) => {
            return (
              <Resource resource={resource} key={i}/>
            )
          })}
        </div>
        <Box component="form" autoComplete="off">
          <TextField required label="Add New Resource" placeholder="Dogs" size="small" onChange={handleChange} ></TextField>
          <Button variant='contained' onClick={handleSubmit}>Create</Button>
          </Box>
        </ Box>
    </Box>
  )
};

export default ResourceTracker;