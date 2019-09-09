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
const game = new Game();
const btn_reset = ('startButton');
const keyboard = ('qwerty');
const reset = ('btn_reset');
let startButton = document.getElementById("btn_reset");

startButton.addEventListener('click',() => {
    game.startGame();
  });
  //Call startGame() method on new Game object
    
    
  

