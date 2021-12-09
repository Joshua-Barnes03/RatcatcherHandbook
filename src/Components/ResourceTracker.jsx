import React, { useState, useEffect } from 'react';
import Resource from './Resource.jsx';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography, Alert } from '@mui/material';
const localStorage = window.localStorage;

const ResourceTracker = function() {

  let storage = JSON.parse(localStorage.getItem('resources'));
  if (!Array.isArray(storage)) {storage = []};
  const [resources, setResources] = useState(storage);
  const [newResource, setNewResource] = useState('');

  const handleResourceSubmit = (event) => {
    setNewResource(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (resources.length < 10) {
      let temp = resources.slice();
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
    } else {
      //TODO: use a modal for this instead
      alert(`Please delete a resource before attempting to add another one.`)
    }
  }

  const deleteResource = (index) => {
    let temp = resources.slice();
    temp.splice(index, 1);
    setResources(temp);
  }

  const trackResource = (index, resource) => {
    let temp = resources.slice();
    temp[index] = resource;
    setResources(temp);
  }

  useEffect(() => {
    localStorage.setItem('resources', JSON.stringify(resources))
  }, [resources])

  return (
    <Box id="resourceTracker" sx={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      width: '100%',
      position: 'absolute',
      paddingTop: '10px',
    }}>
      <Typography variant="h2" sx={{position: 'fixed'}}>Resource Tracker</Typography>
      <Box sx={{
        // boxShadow: '0px 1px 3px -1px black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        width: '60vw',
        height: '100%',
        textAlign: 'center',
        paddingTop: '10px'
      }}>
        <Box sx={{display: 'flex',
        flexDirection: 'column',
        justifyingContent: 'center',
        alignContent: 'center'
        }}>
          <Box id="trackerArea">
            {resources.map((resource, i) => {
              return (
                <Resource resource={resource} key={i} deleteResource={deleteResource} i={i} trackResource={trackResource} />
              )
            })}
          </Box>
          <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
            <TextField required label="Add New Resource" placeholder="Dogs" size="small" onChange={handleResourceSubmit} value={newResource} name="NEWRESOURCE" sx={{marginRight: '5px', borderColor: 'var(--black)', color: 'var(--black)'}}></TextField>
            <Button variant='outlined' type="submit" size="large" sx={{marginLeft: '5px', borderColor: 'var(--black)', color: 'var(--black)'}}>Create</Button>
          </Box>
        </Box>
        </ Box>
    </Box>
  )
};

export default ResourceTracker;