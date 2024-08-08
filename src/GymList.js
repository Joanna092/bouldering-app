import React from 'react';

const GymList = ({ gyms }) => (
  <div className="card">
    <h2>Gym List</h2>
    <ul>
      {gyms.map((gym, index) => (
        <li key={index}>{gym.name} - {gym.location}</li>
      ))}
    </ul>
  </div>
);

export default GymList;
