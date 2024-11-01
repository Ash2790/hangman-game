// src/components/HangmanImage.js

// Importing React and the component-specific stylesheet
import React from 'react';
import './HangmanImage.css';

const HangmanImage = ({ incorrectGuesses }) => {
  // Determine which image to display based on the number of incorrect guesses
  const imageIndex = Math.min(incorrectGuesses + 1, 11);

  return (
    <div className="hangman-image">
      {/* Render the image that corresponds to the current number of incorrect guesses */}
      <img src={`images/state${imageIndex}.png`} alt={`Hangman State ${imageIndex}`} />
    </div>
  );
};

export default HangmanImage;
