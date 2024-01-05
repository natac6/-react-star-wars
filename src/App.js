 // src/App.js
 import React, { useState, useEffect } from "react";
 import { getAllStarships } from "./services/sw-api";
 import StarshipCard from "./components/StarshipCard";
 
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
     <div>
       <h1>Star Wars Starships</h1>
       <div style={{ display: "flex", flexWrap: "wrap" }}>
         {starships.map((starship) => (
           <StarshipCard
           key={starship.name}
           starship={starship}
           onClick={(e) => {
             // Your click event handling logic using e.target here
             console.log("Starship card clicked:", e.target);
           }}
         />
         
         ))}
       </div>
     </div>
   );
 }
 
 export default App;