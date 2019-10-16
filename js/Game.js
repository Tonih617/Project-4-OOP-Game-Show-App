//*DECLARING MY "GAME" CLASS*\\
class Game {
    constructor() {//*CREATING MY "GAME" CONSTRUCTOR METHOD*\\
        this.missed = 0;//sets the game at 0// 
        this.phrases = [//array of phrases used in the game//
            new Phrase('nobody puts baby in a corner'),
            new Phrase('live laugh love'),
            new Phrase('are you feeling lucky'),
            new Phrase('one man wolf pack'),
            new Phrase('a little respect')]; 
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
         this.gameOver('win');
     }
     
 }
 
      
     gameOver(winOrLose){
    const overlay = document.querySelector('#overlay');//creating an overly varible using the query selector method//
    overlay.style.display = '';//displays the intitial overlay after game is won or lost//
    if(winOrLose === "lose"){
        alert("sorry you lost!");
        overlay.classList.remove('win');
        overlay.classList.add('lose');

    }else{
        alert("congratulations you won!");
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
         button.classList.add('chosen');// If the letter chosen is apart of the phrase button will display as chosen//
        this.activePhrase.showMatchedLetter(button.innerText);// will disable and shadow out letter after it has been matched//
        if(this.checkForWin()){
            this.gameOver();
        }
     }else{this.removeLife()
        this.checkForWin();
        button.classList.add('wrong');// If the letter chosen is apart of the phrase button will display as wrong// 
        if (this.missed.length === 5) {
         alert("game over");
         
     } 
    }
}

    // const getClue = document.getElementById("clue");
    // // clue

    // clue.onclick = function() {

    //     clues = [
    //       ["Dirty Dancing", "Clint EastWood", "The HangOver", "A little bit goes a long way"] 
    //     ];
  
    //   const phraseIndex = categories.indexOf(chosen);
    //   const clueIndex = chosen.indexOf(phrases);
    //   getClue.innerHTML = "clue: - " +  clues [phraseIndex][clueIndex];
    // };
      
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

       this.activePhrase = null;
       $('.key').removeClass('chosen').removeClass('wrong');
       $('.key').prop('disabled', false);




        // keyrow.disabled=true;//If the letter is not apart of the phrase the letter will be disabled//
        // if(this.activePhrase.checkLetter(button.innerText)){//checking to see if the letter has been selected to display or disable//
        //     button.classList.add('chosen', 'animated', 'flash');

        
    //  let keyrow = [];
    //  keyrow = document.querySelectorAll('.key');
    //  console.log(keyrow);
    //  //for (let i = 0; i < keyrow.length; i++) {
    //  keyrow.forEach(key =>{    
    //  key.classList.remove('chosen','wrong','animated','jello','flash');
    //  key.className = 'key';
    //  key.removeAttribute('disabled');
     
    //  });
    //   }  
     
    //   let gameReset = reset('key');
    //  // remove all existing classes from each key//
    // for (var i = 0; i < keyrow.length; i++){
    //     keyrow.innerHTML = "";
    //     [].forEach.call('key', function(gameReset) {
    //         keyrow.appendChild(reset);
    //     });
    //     keyrow[i].classList.remove("chosen", "wrong",);
    //  }  
    
    

     //removing
        // function myFunction() {
        //   document.getElementById("btn__reset").reset();
        // }
       
     // Reset
  
    // document.getElementById('btn__reset').onclick = function() {
      //win.parentNode.removeChild(win);
      //letters.parentNode.removeChild(letters);
    //   getClue.innerHTML = "";
      //context.clearRect(0, 0, 400, 400);
    //   reset();
    // }
} 

  

 

    

}   
