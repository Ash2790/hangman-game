// src/components/GameBoard.js

// Importing React and the custom LetterButton component
import React from 'react';
import LetterButton from './LetterButton';
import './GameBoard.css';

const GameBoard = ({ chosenWord, guessedLetters, handleGuess }) => {
  // Display each letter of the chosen word; hide unguessed letters with underscores
  const wordDisplay = chosenWord.split('').map((letter) =>
    guessedLetters.includes(letter) ? letter : '_'
  ).join(' ');

  // Define the alphabet letters for creating clickable guess buttons
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="game-board">
      {/* Display the word with guessed letters and underscores for unguessed letters */}
      <p className="word-display">{wordDisplay}</p>
      
      {/* Render a button for each letter in the alphabet using LetterButton component */}
      <div className="letter-buttons">
        {alphabet.map(letter => (
          <LetterButton
            key={letter}                // Unique key for each button
            letter={letter}              // The letter to display on the button
            isGuessed={guessedLetters.includes(letter)} // Boolean to disable button if guessed
            handleGuess={handleGuess}    // Function to handle letter guessing
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
