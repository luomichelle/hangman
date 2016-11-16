var hangmanGame = {
  //variable first: 
  wordList:{
    "michelle":{
      picture: 'queen.jpg',
      song: 'Princes of the Universe',
      preview: 'https://p.scdn.co/mp3-preview/b84f24300476f3d3f20056d2388cc51db2e3891f'
      },
    },
    wordDisplay: null, //random
    lettersOfTheWord: [],
    numblanks: 0,
    matchedLetter: [],
    guessedLetter: [],
    letterGuessed: null,
    totalGuesses: 0,
    wins: 0,
    lose:0,

    setupGame:function(){

      var objKeys = Object.keys(this.wordList);
      console.log("objKeys " + objKeys)
      this.wordDisplay = objKeys[Math.floor(Math.random() * objKeys.length)];
      console.log(this.wordDisplay);
      this.lettersOfTheWord = this.wordDisplay.split('');
      this.numblanks = this.lettersOfTheWord.length;
      for (var i = 0; i < this.numblanks; i++) {
        this.matchedLetter.push("_");
      }
      
      document.querySelector('#current-word').innerHTML = this.matchedLetter.join(" ");

      document.querySelector('#guessed-letters').innerHTML = this.guessedLetter.join(" ");

    },

    checkGame:function(Letter){

      console.log(Letter)
      var userLetter = false;
      for (var i = 0; i < this.numblanks; i++) {
          if(this.wordDisplay[i] == Letter) {
                  userLetter = true;
                  this.matchedLetter[i] = Letter;
          }
       }
      this.guessedLetter.push(Letter);
          console.log(this.guessedLetter)

      this.completeGame();
     },



   completeGame:function(){
    console.log("WinCount: " + this.wins + " | LossCount: " + this.lose + " | totalGuesses: " + this.totalGuesses);
    document.querySelector('#wins').innerHTML = this.wins;
    document.querySelector('#current-word').innerHTML = this.matchedLetter.join(" ");
    document.querySelector('#guessed-letters').innerHTML = this.guessedLetter.join(" ");
    if(letters




   }
 }










hangmanGame.setupGame();

document.onkeyup = function(event) {
  hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  hangmanGame.checkGame(hangmanGame.letterGuessed)  
}




    // checkGame:function(Letter){

    //   console.log(Letter)
    //   var userLetter = false;
    //   for (var i = 0; i < this.numblanks; i++) {
    //       if(this.wordDisplay[i] == Letter){
    //         userLetter = true;
    //       }
    //    }
    //   If(userLetter) {
    //   for (var i = 0; i < this.numblanks; i++) {
    //       if(this.wordDisplay[i] == Letter){

    //         this.matchedLetter[i] = Letter;
    //         }
    //       }
    //     }

    //     else{
    //       this.guessedLetter.push(Letter);
    //     }
    //  },
