//*DECLARING MY "PHRASE" CLASS*\\

class Phrase {
//const Phrase = new Phrase();

    constructor(phrase){//*CREATING MY "PHRASE" CONSTRUCTOR METHOD*\\ 
        this.phrase = phrase;
    }
/**
* Display phrase on game board
*/
addPhraseToDisplay() {      // Adds letter placeholders to the display when the game starts
    const ul = document.querySelector('ul');
    [...this.phrase].forEach((character) => {
        const liLetters = document.createElement('li');     // Create li for each letter in phrase
        ul.append(liLetters);
        if(character === ' ') {
            liLetters.classList.add('space');
            liLetters.innerHTML = ' ';
        } else {
            liLetters.classList.add('hide', 'letter', `${character}`, 'animated', 'bounceIn');  //  EXTRA CREDIT: add animation to phrase placeholders
            liLetters.innerHTML = character;
        }
    })
}
//  const phrase = new Phrase('Life is like a box of chocolates');
//  console.log(`Phrase - phrase: ${phrase.phrase}`);
}
