import React, { useState, useEffect } from 'react';
import Resource from './Resource.jsx';

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
  }

  useEffect(() => {

  }, [resources]);

  return (
    <div id="resourcetracker">
      <h2>Resource Tracker</h2>

      <div id="trackerArea">
        {resources.map((resource, i) => {
          return (
            <Resource resource={resource} key={i}/>
          )
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add New Resource: </label>
        <input type='text' name='newResource' onChange={handleChange}></input>
        <input type='submit' value="Create"></input>
        </form>
    </div>
  )
};

export default ResourceTracker;