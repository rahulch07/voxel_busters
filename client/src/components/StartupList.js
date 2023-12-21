import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StartupCard from './StartupCard';

const StartupList = () => {
  const [startups, setStartups] = useState([]);

  useEffect(() => {
    // Fetch startups from the backend
    axios.get('http://localhost:5000/startups')
      .then(response => setStartups(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {startups.map(startup => (
        <StartupCard key={startup._id} startup={startup} />
      ))}
    </div>
  );
};

export default StartupList;
