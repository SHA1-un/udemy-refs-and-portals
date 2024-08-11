import React, { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();
  const [currentPlayerName, setCurrentPlayerName] = useState('unknown entity');
  
  function handleSetName() {
    setCurrentPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {currentPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
