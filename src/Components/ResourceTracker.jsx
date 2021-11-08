import React, { useState, useEffect } from 'react';
import Resource from './Resource.jsx';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

const ResourceTracker = function() {

  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState('');

  const handleResourceSubmit = (event) => {
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
        days: 0,
        result: 0
      }
    );
    setResources(temp);
    setNewResource('')
  }

  useEffect(() => {
  }, [resources])

  const deleteResource = (index) => {
    var temp = resources.slice();
    temp.splice(index, 1);
    setResources(temp);
  }

  const trackResource = (index, resource) => {
    var temp = resources.slice();
    temp[index] = resource;
    setResources(temp);
  }

  return (
    <Box id="resourceTracker" sx={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      width: '100%',
      position: 'absolute',
      paddingTop: '10px'
    }}>
      <Typography variant="h2" sx={{position: 'fixed'}}>Resource Tracker</Typography>
      <Box sx={{
        // boxShadow: '0px 1px 3px -1px black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        width: '60vw',
        height: 'auto',
        textAlign: 'center',
        paddingTop: '10px'
      }}>
        <Box sx={{
        }}>
          <div id="trackerArea">
            {resources.map((resource, i) => {
              return (
                <Resource resource={resource} key={i} deleteResource={deleteResource} i={i} trackResource={trackResource} />
              )
            })}
          </div>
          <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
            <TextField required label="Add New Resource" placeholder="Dogs" size="small" onChange={handleResourceSubmit} value={newResource} name="NEWRESOURCE"></TextField>
            <Button variant='outlined' type="submit" size="large">Create</Button>
          </Box>
        </Box>
        </ Box>
    </Box>
  )
};

export default ResourceTracker;