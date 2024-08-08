import React from 'react';

const SessionList = ({ sessions }) => (
  <ul>
    {sessions.map((session, index) => (
      <li key={index}>
        {session.date} - {session.gym} - {session.routeName} - {session.difficulty}
      </li>
    ))}
  </ul>
);

export default SessionList;
