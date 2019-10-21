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
    //adding a check Letter method//
    checkLetter(letter) {
    return this.phrase.includes(letter);//
    }

    //adding a show matched letter method// 
    showMatchedLetter(letter) {
    const button = document.getElementsByClassName(letter);//storing the button varible to the class name letter//
    for (let letter of button) { //adding a for loop to go through the letters of the phrase and show matched letters//
        letter.classList.remove('hide');//creating a remove method to hide letters not in phrase//
        letter.classList.add('show');// creating a add method to show letters in phrase if guessed correctly//
    }
    
    }
    
    //adding a missed letter method//
    missedLetter(letter) {
    const button = document.getElementsByClassName(letter);//storing the button varible to the class name letter//
    for (let letter of button) { //adding a for loop to go through the letters of the phrase and show matched letters//
        letter.classList.remove('hide');//creating a remove method to hide letters not in phrase//
        letter.classList.add('show');// creating a add method to show letters in phrase if guessed correctly//
    } 
    }      
}
