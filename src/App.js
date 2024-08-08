import './App.css';
import React, { useState } from 'react';
import GymList from './GymList';
import AddGym from './AddGym';
import LogSession from './LogSession';
import SessionList from './SessionList';
import './App.css'; // Add any global styles here


const App = () => {
  const [gyms, setGyms] = useState([]);
  const [sessions, setSessions] = useState([]);

  const addGym = (gym) => setGyms([...gyms, gym]);
  const addSession = (session) => setSessions([...sessions, session]);

  return (
    <div className="App">
      <h1>Bouldering Progress Tracker</h1>
      <AddGym addGym={addGym} />
      <GymList gyms={gyms} />
      <LogSession gyms={gyms} addSession={addSession} />
      <SessionList sessions={sessions} />
    </div>
  );
};

export default App;

