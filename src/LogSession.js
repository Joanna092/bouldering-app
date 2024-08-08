import React, { useState } from 'react';

const LogSession = ({ gyms, addSession }) => {
  const [date, setDate] = useState('');
  const [gym, setGym] = useState('');
  const [routeName, setRouteName] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addSession({ date, gym, routeName, difficulty });
    setDate('');
    setGym('');
    setRouteName('');
    setDifficulty('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <select
        value={gym}
        onChange={(e) => setGym(e.target.value)}
        required
      >
        <option value="">Select Gym</option>
        {gyms.map((gym, index) => (
          <option key={index} value={gym.name}>{gym.name}</option>
        ))}
      </select>
      <input
        type="text"
        value={routeName}
        onChange={(e) => setRouteName(e.target.value)}
        placeholder="Route Name"
        required
      />
      <input
        type="text"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        placeholder="Difficulty"
        required
      />
      <button type="submit">Log Session</button>
    </form>
  );
};

export default LogSession;
