import React from 'react';
import { Link } from 'react-router-dom';

function Map() {
  return (
    <div>
      <h1>Map Page</h1>
      <p>This is where the map will be displayed.</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Map;
