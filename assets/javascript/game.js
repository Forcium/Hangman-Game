// variables
  var red = ["r","e","d"];
  var blue = ["b","l","u","e"]
  var black = ["b","l","a","c","k"]
  var pink = ["p","i","n","k"]
  var word = [red, blue, black, pink];
  var randomWord;
  var spaces = "_";
  var keyInput;
  var duplicate = false;
  var duplicateCorrect = false;
  var wrongInput = [];
  var correctInput = []
  var guessLeft = 15;
  var alreadyGuessed;
  var x = false;
  var correctAnswers = 0;
  var wins = 0;



// computer generates random word
  randomWord = word[Math.floor(Math.random() * word.length)];

  for (var j = 0; j < randomWord.length; j++) {
// will iterating through randomWord and turning into spaces on html
    document.getElementById("spaces").innerHTML += "<div class='letterContainer'><div class='letter'>"+randomWord[j]+"</div></div>";
  }
    

// user inputs a letter
    document.onkeyup = function(event) {
      keyInput = event.key;
      console.log(keyInput);

// looping
  for (var j = 0; j<document.getElementsByClassName("letter").length; j++){
// checking for correct input and displays letter if correct
    if (keyInput === document.getElementsByClassName("letter")[j].innerHTML){
      console.log (keyInput+"!");
      document.getElementsByClassName("letter")[j].style.visibility = "visible";
      x = true;
      //
      // console.log('correctAnswer: '+correctAnswers);

      for (var i = 0; i < correctInput.length; i++) {
        if (keyInput == correctInput[i]) {
          console.log (keyInput + " already guessed");
          duplicateCorrect = true;
        }
      }
        if (duplicateCorrect == false) {
          correctInput.push(keyInput);
          correctAnswers += 1;

          console.log (correctInput);
        }
      duplicateCorrect = false;
    }
  }
// otherwise follows through with guessLeft counter deduction -1
  if (x == false){
    for (var i = 0; i < wrongInput.length; i++) {
      if (keyInput == wrongInput[i]) {
        console.log (keyInput + " already guessed");
        duplicate = true;
      }
    }
      if (duplicate == false) {
        wrongInput.push(keyInput);
        console.log (keyInput+"-");
        guessLeft -=1;
        console.log (guessLeft);
        document.querySelector("#guessCounter").innerHTML = guessLeft;
        document.querySelector("#incorrectInput").innerHTML = wrongInput;
      }


    }
    duplicate = false;
      x = false;
      if(document.getElementById("guessCounter").innerHTML == "0"){
        setTimeout(function(){
          alert("You Lose!");
          randomWord = word[Math.floor(Math.random() * word.length)];
          document.getElementById("spaces").innerHTML = "";
          document.getElementById("guessCounter").innerHTML = "15";
          guessLeft = 15;
          wrongInput = [];
          correctAnswers = 0;
          correctInput = []
          document.querySelector("#incorrectInput").innerHTML = "";
          for (var j = 0; j < randomWord.length; j++) {
          document.getElementById("spaces").innerHTML += "<div class='letterContainer'><div class='letter'>"+randomWord[j]+"</div></div>";
          }
        }, 1);

      }


      if(correctAnswers == document.getElementsByClassName("letter").length){
        setTimeout(function(){
          alert("Winner!");
          randomWord = word[Math.floor(Math.random() * word.length)];
          document.getElementById("spaces").innerHTML = "";
          document.getElementById("guessCounter").innerHTML = "15";
          wins += 1;
          document.querySelector("#win").innerHTML = wins;
          guessLeft = 15;
          wrongInput = [];
          correctAnswers = 0;
          correctInput = []
          document.querySelector("#incorrectInput").innerHTML = "";
          for (var j = 0; j < randomWord.length; j++) {
            document.getElementById("spaces").innerHTML += "<div class='letterContainer'><div class='letter'>"+randomWord[j]+"</div></div>";
          }
        }, 1);
      }
}
