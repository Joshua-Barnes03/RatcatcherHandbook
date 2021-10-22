import React, { useState } from 'react';
import Resource from './Resource.jsx';

const ResourceTracker = function() {

  return (
    <div id="resourcetracker">
      <h2>Resource Tracker</h2>

      <div id="trackerArea">
        <Resource />
      </div>
    </div>
  )
};

export default ResourceTracker;