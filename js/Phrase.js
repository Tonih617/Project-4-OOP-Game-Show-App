//*DECLARING MY "PHRASE" CLASS*\\

class Phrase {
//const Phrase = new Phrase();

constructor(phrase){//*CREATING MY "PHRASE" CONSTRUCTOR METHOD*\\ 
        this.phrase = phrase; 
}
/**
* Display phrase on game board
*/
addPhraseToDisplay() {// adds letter placeholders to the display when the game begins//
    const ul = document.querySelector('ul');
    [...this.phrase].forEach((character) => {
        const liLetters = document.createElement('li');// Create li for each letter in phrases//
        ul.append(liLetters);
        if(character === ' ') {
            liLetters.classList.add('space');//adds space in between letters//
            liLetters.innerHTML = ' ';//accessing stored letters in the html//
        } else {
            liLetters.classList.add('hide', 'letter', character); 
            liLetters.innerHTML = character;
        }
    })
}
    checkLetter(letter) {
    return this.phrase.includes(letter);
    }

    showMatchedLetter(letter) {
    const button = document.getElementsByClassName(letter);
    for (let letter of button) {
        letter.classList.remove('hide');
        letter.classList.add('show');
    }
    // button.classList.remove("hide");
    // button.classList.add("show");
    }

    missedLetter(letter) {
    const button = document.getElementsByClassName(letter);
    for (let letter of button) {
        letter.classList.remove('hide');
        letter.classList.add('show');
        //tries.classList.remove();
    //} else { 
    //document.getElementsByClassName(life).remove(); 
    } 
    }      
//  const phrase = new Phrase('Life is like a box of chocolates');
//  console.log(`Phrase - phrase: ${phrase.phrase}`);
}
