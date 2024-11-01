// src/App.js

// Importing React and necessary components
import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import HangmanImage from './components/HangmanImage';
import StatusMessage from './components/StatusMessage';
import './App.css';

const App = () => {
  // State for the chosen word for the game
  const [chosenWord, setChosenWord] = useState('');
  // State to track letters that have been guessed
  const [guessedLetters, setGuessedLetters] = useState([]);
  // State for counting incorrect guesses
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  // State for tracking game status ('playing', 'won', or 'lost')
  const [gameStatus, setGameStatus] = useState('playing');
  // State to store the list of words fetched from the dictionary file
  const [words, setWords] = useState([]);

  // Fetch words from the dictionary file located in public/assets when the component mounts
  useEffect(() => {
    fetch('/assets/dictionary.txt')
      .then(response => response.text())
      .then(data => {
        // Parse the file content to get an array of words, excluding empty lines and non-alphabetical words
        const wordsArray = data.split('\n')
          .map(word => word.trim())
          .filter(word => word.length > 1 && /^[a-zA-Z]+$/.test(word));
        setWords(wordsArray);  // Store the array of words in state
        if (wordsArray.length > 0) {
          setChosenWord(randomWord(wordsArray));  // Set a random word for the game
          setGameStatus('playing');  // Ensure game starts in 'playing' status
        }
      })
      .catch(error => console.error('Error fetching dictionary:', error));
  }, []);

  // Function to select a random word from the list
  const randomWord = (wordsArray) => {
    return wordsArray[Math.floor(Math.random() * wordsArray.length)];
  };

  // Function to reset the game state with a new word
  const restartGame = (wordsArray = words) => {
    const newWord = randomWord(wordsArray); // Get a new random word
    setChosenWord(newWord || '');  // Set chosenWord to the new word or an empty string if unavailable
    setGuessedLetters([]);  // Clear guessed letters
    setIncorrectGuesses(0);  // Reset incorrect guesses
    setGameStatus('playing');  // Reset game status to 'playing'
  };

  // Function to handle each letter guessed by the player
  const handleGuess = (letter) => {
    // Only allow guesses if the game is in 'playing' status and the letter hasn't been guessed
    if (!guessedLetters.includes(letter) && gameStatus === 'playing') {
      setGuessedLetters([...guessedLetters, letter]);  // Add letter to guessed letters

      // If the guessed letter is not in the chosen word, increment incorrect guesses
      if (!chosenWord.includes(letter)) {
        const newIncorrectGuesses = incorrectGuesses + 1;
        setIncorrectGuesses(newIncorrectGuesses);  // Update the incorrect guess count

        // Check if the 11th incorrect guess has been reached; if so, set game status to 'lost'
        if (newIncorrectGuesses >= 11) {
          setGameStatus('lost');
        }
      }
    }
  };

  // Function to check if the game is won by verifying that all letters have been guessed
  const updateGameStatus = () => {
    if (chosenWord && guessedLetters.length) {
      // Check if all letters in the chosen word have been guessed
      const isWon = chosenWord.split('').every(letter => guessedLetters.includes(letter));
      if (isWon) {
        setGameStatus('won');  // Set game status to 'won' if the player has guessed all letters
      }
    }
  };

  // useEffect to check the game status whenever guessed letters or incorrect guesses are updated
  useEffect(() => {
    if (gameStatus === 'playing') {
      updateGameStatus();
    }
  }, [guessedLetters, incorrectGuesses]);

  return (
    <div className="App">
      <h1>Hangman Game</h1>
      {/* Display the hangman image that corresponds to the number of incorrect guesses */}
      <HangmanImage incorrectGuesses={incorrectGuesses} />
      
      {/* Render the GameBoard component if a word is chosen and game status is 'playing' */}
      {chosenWord && gameStatus === 'playing' && (
        <GameBoard
          chosenWord={chosenWord}
          guessedLetters={guessedLetters}
          handleGuess={handleGuess}
        />
      )}
      
      {/* Display game status message (won or lost) and restart button if game is over */}
      <StatusMessage gameStatus={gameStatus} restartGame={() => restartGame(words)} />
    </div>
  );
};

export default App;
