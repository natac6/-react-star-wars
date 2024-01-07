import React, { useState } from "react";
import './starship.css';

const StarshipCard = ({ starship }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={`starshipcard ${isClicked ? "clicked" : ""}`} onClick={handleClick}>
      <h2 className={`header ${isClicked ? "hidden" : ""}`}>{starship.name}</h2>
      <div className="discription">
        <p className={`model ${isClicked ? "" : "hidden"}`}>Model: {starship.model}</p>
        <p className={`manufacturer ${isClicked ? "" : "hidden"}`}>Manufacturer: {starship.manufacturer}</p>
      </div>
      {/* Add more details as needed */}
    </div>
  );
};

export default StarshipCard;
