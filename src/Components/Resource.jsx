import React, { useState, useEffect } from 'react';

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label><span>{name}</span>
        <label>Starting Value: </label><input type="number" min="0" name={START} value={start} onChange={e => handleChange(e)}></input>
        <label>Input: </label><input type="number" min="0" name={INPUT} value={input} onChange={e => handleChange(e)}></input>
        <label>Output: </label><input type="number" min="0" name={OUTPUT} value={output} onChange={e => handleChange(e)}></input>
        <label>Number of Days: </label><input type="number" min="0" name={DAYS} value={days} onChange={e => handleChange(e)}></input>
        <input type="submit" value="Calculate"></input>
        <output name={RESULT} htmlFor={RESOURCE, START, INPUT, OUTPUT, DAYS}>{result}</output>
      </form>
    </div>
  );
};

export default Resource;