import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const [NAME, START, INPUT, OUTPUT, DAYS, RESULT] = ['name', 'start', 'input', 'output', 'days', 'result']

const Resource = function({resource, deleteResource, i, trackResource}) {

  const handleChange = (event) => {
    let key = event.target.name;
    let temp = {...resource};
    temp[key] = parseInt(event.target.value)
    trackResource(i, temp);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var temp = {...resource};
    temp.result = resource.start + (resource.input * resource.days) - (resource.output * resource.days);
    temp.start = temp.result;
    trackResource(i, temp);
  };

  return (
    <Box componenet="form" sx={{
      boxShadow: '0 1px 5px -4px black',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: '5px',
      p: '2px'
    }}
    autoComplete="off">
      <TextField label="Name:" value={resource.name} size="small" onChange={handleChange} sx={{borderColor: 'var(--black)', color: 'var(--black)'}}></TextField>
      <TextField label="Starting Value:" type="number" size="small" name={START} value={resource.start} onChange={handleChange} sx={{borderColor: 'var(--black)', color: 'var(--black)'}}/>
      <TextField label="Input:" type="number" min="0" name={INPUT} value={resource.input} onChange={handleChange} size="small" sx={{borderColor: 'var(--black)', color: 'var(--black)'}}/>
      <TextField label="Output:" type="number" min="0" name={OUTPUT} value={resource.output} onChange={handleChange} size="small" sx={{borderColor: 'var(--black)', color: 'var(--black)'}}/>
      <TextField label="Number of Days:" type="number" min="0" name={DAYS} value={resource.days} onChange={handleChange} size="small" sx={{borderColor: 'var(--black)', color: 'var(--black)'}}/>
      <Button variant="outlined" onClick={handleSubmit} sx={{borderColor: 'var(--black)', color: 'var(--black)'}}>Calculate</Button>
      <TextField disabled label="Result:" size="small" value={resource.result} sx={{borderColor: 'var(--black)', color: 'var(--black)'}}/>
      <Button variant="outlined" onClick={() => deleteResource(i)} sx={{borderColor: 'var(--black)', color: 'var(--black)'}}><DeleteOutlineIcon/></Button>
    </Box>
  );
};

export default Resource;