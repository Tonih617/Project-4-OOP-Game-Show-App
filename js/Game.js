//*DECLARING MY "GAME" CLASS*\\
class Game {
    constructor(Game) {//*CREATING MY "GAME" CONSTRUCTOR METHOD*\\
        this.missed = 0;//sets the game at 0// 
        this.phrases = [//array of phrases used in the game//
            new Phrase('nobody puts baby in a corner'),
            new Phrase('dude wheres my car'),
            new Phrase('go ahead make my day'),
            new Phrase('hey guys you ready to let the dogs out'),
            new Phrase('the snozberries taste like snozberries')]; 
        this.activePhrase = null;
    
        //return phrases;
    }
    getRandomPhrase(){//adding a get random phrase function to grab one phrase at random between 0-5//
    return this.phrases[Math.floor ((Math.random(phrase) * 5))];
}  
startGame() {//Hides the  initial overlay
    const overlay = document.querySelector('#overlay');//creating an overlay varible using the query selector method//
    overlay.style.display = 'none';//hides the intitial overlay// 
    this.activePhrase = this.getRandomPhrase();//grabs a Phrase object from the list of phrases// 
    this.activePhrase.addPhraseToDisplay();// adds phrases to the game//

}; 

 removeLife(){//remove Method, replaces liveheart.png with girl-emoji.png//
     const photos = document.getElementsByTagName("images");
     photos[this.missed].src="images/girl-emoji.png";
     this.missed ++;//increases the counter by one//
     if (this.missed === 5) {
        this.gameOver("lose");
    }   
 }

 
  checkForWin(){
     let hiddenLetters = document.querySelectorAll('.hide');
     if (hiddenLetters.length === 0) {
         this.gameOver('win');
     }
     
 }
 
      
     gameOver(winOrLose){
    const overlay = document.querySelector('#overlay');//creating an overly varible using the query selector method//
    overlay.style.display = '';//displays the intitial overlay after game is won or lost//
    if(winOrLose == "lose"){
        alert("sorry you lost!");

    }else{
        alert("congratulations you won!");
      }
    }
// const letter = ("keyrow");
//*CREATING MY HANDLE INTERACTION FUNCTION*//
 

 handleInteraction(button){ //Defining the button attribute into the handle interaction function//
     button.disabled=true;//If the letter is not apart of the phrase the letter will be disabled//
     if(this.activePhrase.checkLetter(button.innerText)){//checking to see if the letter has been selected to display or disable//
         button.classList.add("chosen");// If the letter chosen is apart of the phrase button will display as chosen//
        this.activePhrase.showMatchedLetter(button.innerText);// will disable and shadow out letter after it has been matched//
     }else{this.removeLife() 
        if (this.missed.length === 5) {
         alert("game over");
     } 
            
       
            
       
            
     }
     
    // }else{
    //    document.innerText.removeLife('scoreboard');
    //     var tries = document.getElementsByClassName("tries");
    //      tries.remove;
    
    // var answerArray = [];
    // for (var i = 0; i <letter.length; i++) {
    //     answerArray[i] = "_";

    // var remainingLetters = word.length    
    // }



       // 
        // remove('tries'); 
     }
    

    }


 

    
//}
    
