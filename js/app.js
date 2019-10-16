/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// 
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);


const game = new Game();//declaring and storing my varibles//
const btn_reset = ('startButton');
const keyboard = ('qwerty');   
const reset = ('btn__reset');
const startButton = document.getElementById('btn__reset');
const button = document.getElementById('qwerty');
const life = document.getElementById('tries');
//const removeLife = ('remove');
const images = ('images');
const letter = ('letter');
this.getHint = "";
this.secretWord = "";
this.letters = [];
this.guessedLetter = "";
this.errorsLeft = 5;
this.messages = {
  win: "You won!",
  loose: "Game over!",
  guessed: "You already guessed this letter, please try again..",
  notValidLetter: "Please enter a valid letter from a-z",
  
}

startButton.addEventListener('click',() => {//adding an event listener to the start button//
    game.startGame();
  });
  //Call startGame() method on new Game object
  button.addEventListener('click',(event) => {//adding an event listener to the start button//
    if(event.target.nodeName === "BUTTON") {
      game.handleInteraction(event.target);
      
    }
          
  });   
    
  

