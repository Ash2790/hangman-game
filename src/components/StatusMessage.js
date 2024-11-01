// src/components/StatusMessage.js

// Importing React and component-specific styling
import React from 'react';
import './StatusMessage.css';

const StatusMessage = ({ gameStatus, restartGame }) => (
  <div className="status-message">
    {/* Display a winning message if the game status is 'won' */}
    {gameStatus === 'won' && <p>Congratulations! You won!</p>}
    
    {/* Display a losing message if the game status is 'lost' */}
    {gameStatus === 'lost' && <p>Sorry, you lost. Try again!</p>}
    
    {/* Show a restart button if the game is over, either won or lost */}
    {gameStatus !== 'playing' && (
      <button onClick={restartGame}>Restart Game</button>
    )}
  </div>
);

export default StatusMessage;
