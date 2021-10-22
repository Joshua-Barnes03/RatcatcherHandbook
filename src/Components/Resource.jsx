import React, { useState } from 'react';

const Resource = function() {

  const [resource, setResource] = useState('');
  const handleChange = (event) => {

  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <label>Resource: </label><input type="text"></input>
        <label>Input: </label><input type="text"></input>
        <label>Output: </label><input type="text"></input>
        <label>Number of Days: </label><input type="number"></input>
      <input type="submit" onSubmit={(e) => {handleSubmit(e)}}></input>
      </form>
    </div>
  );
};

export default Resource;