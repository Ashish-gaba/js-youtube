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