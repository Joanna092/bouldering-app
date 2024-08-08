import React, { useState } from 'react';
import GymList from './GymList';
import AddGym from './AddGym';
import LogSession from './LogSession';
import SessionList from './SessionList';
import './App.css'; // Import the CSS file

const App = () => {
  const [gyms, setGyms] = useState([]);
  const [sessions, setSessions] = useState([]);

  const addGym = (gym) => setGyms([...gyms, gym]);
  const addSession = (session) => setSessions([...sessions, session]);

  return (
    <div className="App">
      <div className="header">
        <h1>Bouldering Progress Tracker</h1>
      </div>
      <div className="main-container">
        <div className="sidebar">
          <div className="card">
            <AddGym addGym={addGym} />
          </div>
          <div className="card">
            <LogSession gyms={gyms} addSession={addSession} />
          </div>
        </div>
        <div className="content">
          <div className="card">
            <GymList gyms={gyms} />
          </div>
          <div className="card">
            <SessionList sessions={sessions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
