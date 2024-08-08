import React, { useState } from 'react';

const AddGym = ({ addGym }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addGym({ name, location });
    setName('');
    setLocation('');
  };

  return (
    <div className="card">
      <h2>Add Gym</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Gym Name"
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          required
        />
        <button type="submit">Add Gym</button>
      </form>
    </div>
  );
};

export default AddGym;
