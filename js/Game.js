//*DECLARING MY "GAME" CLASS*\\
class Game {
    constructor() {//*CREATING MY "GAME" CONSTRUCTOR METHOD*\\
        this.missed = 0;//sets the game at 0// 
        this.phrases = [//array of phrases used in the game//
            new Phrase('nobody puts baby in a corner'),//this.getClues[0],
            new Phrase('live laugh love'),//this
            new Phrase('are you feeling lucky'),
            new Phrase('one man wolf pack'),
            new Phrase('a little respect')]; 
            this.getClue = 
          ["Dirty Dancing", "die cry hate","Clint EastWood", "The HangOver", "A little bit goes a long way"];
        this.activePhrase = null;
        this.activeHint = null;
        this.getClueIndex;
    
        //return phrases;
    }
    getRandomPhrase(){//adding a get random phrase function to grab one phrase at random between 0-5//
        this.getClueIndex = Math.floor ((Math.random(phrase) * 5))
        //this.activeHint = this.getClue[this.getClueIndex];
       // console.log(this.activeHint);
     return this.phrases[this.getClueIndex];//[Math.floor ((Math.random(phrase) * 5))];
}  

  gethint() {
    this.activeHint = this.getClue[this.getClueIndex];
    return this.activeHint;
  }

startGame() {//Hides the  initial overlay
    const overlay = document.querySelector('#overlay');//creating an overlay varible using the query selector method//
    overlay.style.display = 'none';//hides the intitial overlay// 
    this.activePhrase = this.getRandomPhrase();//grabs a Phrase object from the list of phrases// 
    this.activePhrase.addPhraseToDisplay();// adds phrases to the game//
    
}; 

 removeLife(){//remove Method, replaces liveheart.png with girl-emoji.png//
     const images = document.getElementsByTagName("img");
     images[this.missed].src="images/Crying-Emoji.png";
     this.missed ++;//increases the counter by one//
     if (this.missed === 5) {
        this.gameOver('lose');
    }   
 }

 
  checkForWin(){
     let hiddenLetters = document.querySelectorAll('.hide');
     if (hiddenLetters.length === 0) {
         return true;
     }
     
 }
 
     
     gameOver(winOrLose){
         
    const overlay = document.querySelector('#overlay');//creating an overly varible using the query selector method//
    overlay.style.display = '';//displays the intitial overlay after game is won or lost//
    const gameOverMessage = document.getElementById('game-over-message');
    if(winOrLose === "lose"){
        gameOverMessage.textContent = "sorry you lost!";
        overlay.classList.remove('win');
        overlay.classList.add('lose');

    }else {
        gameOverMessage.textContent = "congratulations you won!";
        overlay.classList.remove('lose');
        overlay.classList.add('win');
      }
       this.gameReset();
}
// const letter = ("keyrow");
//*CREATING MY HANDLE INTERACTION FUNCTION*//
 

 handleInteraction(button){ //Defining the button attribute into the handle interaction function//
     button.disabled=true;//If the letter is not apart of the phrase the letter will be disabled//
     if(this.activePhrase.checkLetter(button.innerText)){//checking to see if the letter has been selected to display or disable//
         button.classList.add('chosen','animated','flash');// If the letter chosen is apart of the phrase button will display as chosen//
        this.activePhrase.showMatchedLetter(button.innerText);// will disable and shadow out letter after it has been matched//
        if (this.checkForWin() === true) {
            this.gameOver('win');
        }
     }else{
        button.classList.add('wrong','animated','jello');// If the letter chosen is apart of the phrase button will display as wrong// 
        this.removeLife()

        
     }  
     }


 
      //loop through keyboard//

     gameReset() {
        let listItem = [];
        listItem = document.querySelectorAll('.letter');
        listItem.forEach(l => l.parentNode.removeChild(l));

        let spaces = [];
        spaces = document.querySelectorAll('.space');
        spaces.forEach(space => space.parentNode.removeChild(space));

        let image = [];
       image = document.querySelectorAll('img');
       image.forEach(img => {
       img.src= 'images/girl-emoji.png';// Restore girl-emoji
                    
       });
        let clueDiv = document.querySelector("#clue");
        clueDiv.innerText = "";
       this.activePhrase = null;
       //this.activeHint = null;
        
        let keys = [];
       keys = document.querySelectorAll('.key');
       keys.forEach(key => {                               // Enable all keys
           key.removeAttribute("disabled");
           key.className = "key";
       });

}
 }


  

 

    

   
