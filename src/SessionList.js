import React from 'react';

const SessionList = ({ sessions }) => (
  <ul>
    {sessions.map((session, index) => (
      <li key={index}>
        <p>{session.date} - {session.gym} - {session.routeName} - {session.difficulty}</p>
        {session.comments && <p>Comments: {session.comments}</p>}
      </li>
    ))}
  </ul>
);

export default SessionList;
