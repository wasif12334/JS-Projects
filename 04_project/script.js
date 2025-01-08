//Variables
let randomNumber = parseInt(Math.random()*100+1);
let button = document.querySelector('#button');
let userInput = document.querySelector('#guessfield');
let guessSlots = document.querySelector('.prevous-guess');
let remaningGuess = document.querySelector('.remaingGuess');
let LowHi = document.querySelector('.LowHi');
let startOver = document.querySelector('.resultPara');

const p = document.createAttribute('p');

let prevousGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    button.addEventListener('click',function(e){
       e.preventDefault();
       const guess = parseInt(userInput.value)
       console.log(guess);
       validation(guess);
    });
}
//Functions

function validation(guess){
// check wheather the value in corerect or nor
if(isNaN(guess)){
    alert('Enter a valid number')
}
else if(guess<1 || guess >100){
    alert(`Your number ${guess} is not between 1 -100\ntry to enter the number between 1-100`)
}
else {
    prevousGuess.push(guess);
    if(numGuess >10){
         displayGuesses(guess);
         displayMessage(`Game Over ! Random Number was  ${randomNumber}`);
         endGame();
    }
    else{
        displayGuesses(guess);
        checkGuess(guess);
    }
}

}

function checkGuess(guess){
// if the value is equal to random value  
  if(guess===randomNumber){
       displayMessage(`You Win !`)
       endGame();
  }
  else if (guess < randomNumber){
    displayMessage(`Number is too low`)
  }
  else if (guess > randomNumber){
    displayMessage(`Number is too high`)
  }

}

function displayGuesses(guess){
// display the remaing guess,display low and hi 
 userInput.value = ' ';
 guessSlots.innerHTML += `${guess} `
 remaningGuess.innerHTML = `${10-numGuess}`
 numGuess++;

}

function displayMessage(message){
LowHi.innerHTML=`<h3>${message}</h3>`
}
function endGame(){
if(numGuess>10){
    userInput.value = ' ';
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML = `<h2 id="NewGame> Star the New Game </h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
}
function newGame(){
    let newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click',(e)=>{
    randomNumber = parseInt(Math.random()*100+1);
    prevousGuess =[]
    numGuess=1
    guessSlots.innerHTML =' '
    remaningGuess.innerHTML = 10;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame =true;
    newGameBtn.style.display = 'none';  
   })
  
}




