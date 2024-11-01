# Hangman Game - React App

Welcome to the Hangman Game! This is a classic word-guessing game built with React, where players try to guess a hidden word by selecting letters from the alphabet. 

## Game Rules

- You start with a randomly selected word, displayed as underscores.
- Click on letters from the alphabet to make guesses.
- Each correct guess reveals the letter in the word.
- Each incorrect guess adds to the Hangman image.
- You have **11 incorrect guesses** allowed before you lose the game.
- If you reveal all letters in the word before reaching 11 incorrect guesses, you win!

## Installation and Setup

To get the Hangman Game running locally on your machine, follow these steps.

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/get-npm)

### Step 1: Clone the Repository
1. Open your terminal or command prompt.
2. Clone this repository:

   git clone https://github.com/Ash2790/hangman-game.git

Step 1 : Navigate into the project directory:
                  cd hangman-game-react

Step 2: Install Dependencies
Install the necessary packages to run the app. You can use either npm or yarn:
                  npm install

Step 3: Start the Application
Start the React app on a local development server:
                  npm start

The app should automatically open in your default browser at http://localhost:3000. If it doesn’t, open your browser and go to http://localhost:3000.

Step 4: Playing the Game
Click on the alphabet letters to make your guesses.
Observe the Hangman image progress as you make incorrect guesses.
Win by revealing the entire word or lose if the Hangman is fully drawn after 11 incorrect guesses.

Project Structure
src/App.js: Main component that manages the game logic and state.
src/components/: Contains subcomponents like GameBoard, HangmanImage, and StatusMessage.
public/assets/dictionary.txt: A list of words for the game to choose from.

Customizing the Game
To add new words:

Open public/assets/dictionary.txt.
Add words, each on a new line.
Save the file and restart the app.
Contributing
If you’d like to contribute:

Fork this repository.
Create a new branch: git checkout -b feature-name.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature-name.
Submit a pull request.


License
This project is open-source. Courtesy of Ashford R. Gougoh. Enjoy!!!
