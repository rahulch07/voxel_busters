import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import StartupCard from './components/StartupCard';
import StartupDetailModal from './components/StartupDetailModal';
import FilterDropdown from './components/FilterDropdown';
import './App.css';
import NavBar from './components/NavBar';

const App = () => {
  const [startups, setStartups] = useState([]);
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [filter, setFilter] = useState('');
  const [filteredStartups,setFilteredStartups] = useState(null);
  const [searchStartup, setSearchstartups] = useState(null);

  const optionsList = ['Consumer Internet', 'Technology', 'eCommerce', 'Healthcare', 'Logistics', 'Education', 'Food & Beverage', 'Finance','Real Estate', 'Others']

  useEffect(() => {
    // Fetch startups from the backend
    axios.get('https://voxel-busters.vercel.app/api/startups').then((response) => setStartups(response.data));
  }, []);

  

  //console.log(startups);

  const handleCardClick = (startup) => {
    setSelectedStartup(startup);
  };

  

  const handleFilterSelect = (value) => {
    //console.log(value);
    
    setFilter(value);
    //window.location.href = '/cards';
  };
 // console.log(filter);

  let notFound = false;

  // let filteredStartups1 = startups.filter((startup) =>
  // filter ? startup.IndustryVertical === filter : true
  
  // );

  // setSelectedStartup(filteredStartups1);

  //filteredStartups =null;
  let searchStartup1=null;

  const handleSearch = (value) =>{
    //console.log(value);
    searchStartup1 = startups.filter((startup) =>{
      if (value === startup.name) {
        return startup;
      }
    
      for (let key in startup) {
        if (value === startup[key]) {
          return startup;
        }
      }
    
      // If no match is found, you can return null or handle it as needed
      return null;
      }
      );

      setSearchstartups(searchStartup1);
      //console.log(searchStartup);

      //setFilter('');

      setFilteredStartups(null);
      //console.log(filteredStartups);
  }

  // Calculate filteredStartups based on the filter value
  useEffect(() => {
    setFilteredStartups(
      console.log(startups);
      startups.filter((startup) => (filter ? startup.IndustryVertical === filter : true))
    );
    //console.log(filteredStartups);
    setSearchstartups(null);
  }, [filter, startups]);

  const handleSave=(formData)=>{
    console.log(formData);
    // Send formData to the backend to save the startup
    axios.post('https://voxel-busters.vercel.app/api/startups', formData)
      .then((response) => {
        // Handle success or error
        console.log('Startup submitted successfully:', response.data);
        // Optionally, you can update the startups state with the new startup
        //console.log(startups);
        setStartups([...startups, response.data]);
        //console.log(startups);
      })
      .catch((error) => {
        console.error('Error submitting startup:', error);
        // Handle error, show a user-friendly message, etc.
      });
  }

  return (
    <div className="App">
      <div className="container">
      <NavBar onSearch={handleSearch} onSave={handleSave} />
      <FilterDropdown options={optionsList} onSelect={handleFilterSelect} />
      {searchStartup && (<StartupCard filteredStartups={searchStartup} onClick={handleCardClick} />)}
      {filteredStartups && (<StartupCard filteredStartups={filteredStartups} onClick={handleCardClick} />)}
      
      
      {selectedStartup && (
        <StartupDetailModal startup={selectedStartup} onClose={() => setSelectedStartup(null)} />
      )}
      
    </div>
    </div>
  );
      }

export default App;
