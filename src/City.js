import React from "react";

import "./City.css";

export default function City() {
  let locationData = {
    city: "Madrid",
    date: "Wednesday 13:31",
    description: "Scattered clouds"
  };
  return (
    <div className="City">
      <div class="overview">
        <h1 id="city">{locationData.city}</h1>
        <ul>
          <li id="date">{locationData.date}</li>
          <li id="description">{locationData.description}</li>
        </ul>
      </div>
    </div>
  );
}