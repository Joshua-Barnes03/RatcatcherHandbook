import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const [RESOURCE, START, INPUT, OUTPUT, DAYS, RESULT] = ['NAME', 'START', 'INPUT', 'OUTPUT', 'DAYS', 'RESULT']

const Resource = function({resource}) {

  const [name, setName] = useState(resource.name);
  const [start, setStart] = useState(resource.start);
  const [input, setInput] = useState(resource.input);
  const [output, setOutput] = useState(resource.output);
  const [days, setDays] = useState(resource.days);
  const [result, setResult] = useState(start);

  useEffect(() => {
    setStart(result);
  }, [result])

  const targets = {
    NAME: setName,
    START: setStart,
    INPUT: setInput,
    OUTPUT: setOutput,
    DAYS: setDays,
    RESULT: setResult
  }

  const handleChange = (event) => {
    let name = event.target.name;
    targets[name](parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    targets[RESULT](
      start + (input * days) - (output * days)
    );
  };

  return (
    <Box componenet="form" sx={{
      boxShadow: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }}
    autoComplete="off">
      <TextField label="Name:" defaultValue={name} size="small"></TextField>
      <TextField label="Starting Value:" type="number" size="small" name={START} value={start} onChange={handleChange} />
      <TextField label="Input:" type="number" min="0" name={INPUT} value={input} onChange={handleChange} size="small" />
      <TextField label="Output:" type="number" min="0" name={OUTPUT} value={output} onChange={handleChange} size="small" />
      <TextField label="Number of Days" type="number" min="0" name={DAYS} value={days} onChange={handleChange} size="small" />
      <Button variant="contained" onClick={handleSubmit}>Calculate</Button>
      <output name={RESULT} htmlFor={RESOURCE, START, INPUT, OUTPUT, DAYS}>{result}</output>
    </Box>
  );
};

export default Resource;