import React from 'react';

const GymList = ({ gyms }) => (
  <ul>
    {gyms.map((gym, index) => (
      <li key={index}>{gym.name} - {gym.location}</li>
    ))}
  </ul>
);

export default GymList;
