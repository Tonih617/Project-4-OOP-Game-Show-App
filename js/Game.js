//*DECLARING MY "GAME" CLASS*\\
class Game {
    constructor(Game) {//*CREATING MY "GAME" CONSTRUCTOR METHOD*\\
        this.missed = 0; 
        this.phrases = [
            new Phrase('Nobody puts baby in a corner!'),
            new Phrase('Dude where\'s my car?'),
            new Phrase('Go ahead. Make my day!'),
            new Phrase('hey guys. You ready to let the dogs out?'),
            new Phrase('The Snozberries taste like Snozberries!')]; 
        this.activePhrase = null;
    
        //return phrases;
    }
    getRandomPhrase(){
    return this.phrases[Math.floor ((Math.random(phrase) * 5))];
}  
startGame() {//Hides the  initial overlay
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';//Selects a Phrase object from the list of phrases and adds the phrase to the gameboard//
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();

}; 
};

