import React, { useState } from 'react';
import './App.css';
import logo from './images/1200px-Logo_of_Bosch_Rexroth_AG.svg.png';

const partNumberDatabase = {
  "123": "Part A",
  "456": "Part B",
  "789": "Part C",
  "1234": "Part D",
  // Add more part numbers and references
};

function App() {
  const [inputValue, setInputValue] = useState('');
  const [matches, setMatches] = useState([]);

  const handleInputChange = (event) => {
    const keyword = event.target.value.toLowerCase();
    setInputValue(keyword);
    const matchingParts = Object.entries(partNumberDatabase).filter(([partNumber]) =>
      partNumber.toLowerCase().startsWith(keyword)
    );
    setMatches(matchingParts);
  };

  return (
    <div className="app">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header">
      </div>
      <div className="search-pane">
        <h2 className="title">Part Number</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter part number..."
          className="part-input"
        />
        <div className="suggestions">
          {matches.map(([partNumber, reference]) => (
            <div key={partNumber} className="suggestion">
              {partNumber}: {reference}
            </div>
          ))}
          {matches.length === 0 && inputValue.length > 0 && (
            <div className="no-matches">No matches found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
