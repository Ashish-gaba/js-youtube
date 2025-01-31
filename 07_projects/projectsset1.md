# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button');
// console.log(buttons) //returns nodelist
const body = document.querySelector('body');

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target) // isse pata lagta hai event aa kaha se raha hai
    if (e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id
    }
  })
})

```

## project 2 solution

```javascript
const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value)
// this usecase will give you empty value


//we need to stop default action of form here (get, post) as that will send it to server, therefore we capture it using event
form.addEventListener('submit', function(e){
  e.preventDefault() //prevents default action (get, post)

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`
  } else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`
  } else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //show the result
    results.innerHTML = `<span>${bmi}</span>`
  }
})

```

## project 3 solution code

```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock') //same as above

//Below method is used to run a method after a certain defined interval continuosly
// SYNTAX - setInterval(function(){}, 1000)

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```

## project 4 solution code

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submitButton = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const guessRemaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true; //is variable ko check kiye bina game aage hi nahi badhta hai

if (playGame) {
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //for validation of guesses (values b/w 0 & 100 etc.)
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //to check whether guessed value is equal, greater or lower than randomn
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  //Dom manipulation
  //to clean the input values, increment prv guess, decreament rem guess
  userInput.value = ''; //cleanup input
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  guessRemaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //display message
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p)
  playGame = false
  newGame()

}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    guessRemaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true
  })
}

```


## project 5  keyboard

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class = 'color'>
    <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>
  `;
});     


```