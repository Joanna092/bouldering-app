import React from 'react';

const SessionList = ({ sessions }) => (
  <div className="card">
    <h2>Session Log</h2>
    <ul>
      {sessions.map((session, index) => (
        <li key={index}>
          <p>{session.date} - {session.gym} - {session.routeName} - {session.difficulty}</p>
          {session.comments && <p>Comments: {session.comments}</p>}
        </li>
      ))}
    </ul>
  </div>
);

export default SessionList;
