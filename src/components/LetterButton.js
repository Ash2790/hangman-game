// src/components/LetterButton.js

// Importing React and component-specific CSS
import React from 'react';
import './LetterButton.css';

const LetterButton = ({ letter, isGuessed, handleGuess }) => (
  <button
    className="letter-button"
    onClick={() => handleGuess(letter)} // Calls handleGuess with the letter when clicked
    disabled={isGuessed}               // Disables button if letter has already been guessed
  >
    {letter.toUpperCase()}              
  </button>
);

export default LetterButton;
