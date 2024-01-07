// src/App.js
import React, { useState, useEffect } from "react";
import { getAllStarships } from "./services/sw-api";
import StarshipCard from "./components/StarshipCard";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'; // Import the stylesheet

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      try {
        const starshipsData = await getAllStarships();
        setStarships(starshipsData);
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    }
    fetchStarships();
  }, []);

  return (
    <div className="centered-container">
      <h1>Star Wars Starships</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {starships.map((starship) => (
          <StarshipCard
            key={starship.name}
            starship={starship}
          />
        ))}
      </div>
    </div>
  );
}

export default App; // Make sure to export App as the default export
