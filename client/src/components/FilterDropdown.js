// FilterDropdown.js
import React from 'react';

const FilterDropdown = ({ options, onSelect }) => {
  //console.log(options)

  const showValue =(e)=>{
    console.log(e.target.value);
  }
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option >Select Industry</option>
      {options.map((option) => (
       
        <option key={option} value={option} onClick={showValue}>
           
          {option}
          
        </option>
        
      ))}
    </select>
  );
};

export default FilterDropdown;

