const water = new Image()
water.src = "/images/water.png"


const cola = new Image()
cola.src = "/images/cola 1.png"

const beer = new Image()
beer.src = "/images/beer.png"

const eMartini = new Image()
eMartini.src = "/images/e-martini.png"

const drinksArray = []
drinksArray.push(water, cola, beer, eMartini)


let score = 0
let beersTotal = 0
let martinisTotal = 0
let drinksTotal = beersTotal + martinisTotal
let alcoholLvl = 0
let randomDrink = ``
let timer = 0


//document.querySelector('#registration-page').style.display = "none"

document.querySelector('#game-screen').style.display = "none"



function registerPage(){
    document.querySelector('#registration-page').style.display = "block" 
}

//////// REGISTRATION PAGE ////

/*window.onload = () => {
    document.getElementById('enter-button').onclick = () => {
    document.querySelector('.game-intro').style.display = "none"
    
  registerPage();
  };}*/

function calculations(drinkType) {
  if (drinkType.src.includes(`water`)){
    alcoholLvl += 300
    score += 500
    document.getElementById('message').innerText = 'ENJOY YOUR DRINK'
  }
  else if (drinkType.src.includes(`cola`)){
    alcoholLvl += 350
    score += 500
    document.getElementById('message').innerText = 'ENJOY YOUR DRINK'
    }
  else if (drinkType.src.includes(`beer`)){
    alcoholLvl += 350
    score += 500
    beersTotal++
    document.getElementById('message').innerText = 'ENJOY YOUR DRINK'
    }
  else if (drinkType.src.includes(`artini`)){
    alcoholLvl += 350
    score += 500
    martinisTotal++
    document.getElementById('message').innerText = 'ENJOY YOUR DRINK'
  }
}


function mysteryBox(){
  const box = document.createElement('img')
  box.src = "/images/box.png"
  box.classList.add("box")
  document.body.appendChild(box)
}

function  appendDrink(){
  randomDrink = drinksArray[Math.floor(Math.random() * drinksArray.length)];
  const img = document.createElement('img')
  img.src = randomDrink.src
  img.classList.add("drink")
  document.body.appendChild(img)
  calculations (randomDrink)
  document.getElementById('score').innerHTML = score
  document.getElementById('timer').innerHTML = timer
  document.getElementById('alcohol-level').innerHTML = alcoholLvl
  document.getElementById('drinks-consumed').innerHTML = drinksTotal
}


function initialize(){
  document.getElementById('drink-button').onclick = () => {
    document.querySelector('.box').style.visibility = 'hidden'
    document.getElementById('drink-button').style.visibility = 'hidden'
    appendDrink()
  }}

  function updateDrinks(){
    document.querySelector('.box').style.visibility = 'visible'
    document.getElementById('drink-button').style.visibility = 'visible'
    document.querySelector('.drink').remove()
    initialize();
    }

///////GAME START PAGE ///////


function startGame(){
  // document.querySelector('#registration-page #start-button').parentElement.remove()
  mysteryBox()
  document.getElementById('drink-button').style.visibility = 'visible'
  initialize()
  const intervalId = setInterval(function () {
    if (alcoholLvl >= 1000 ){
      clearInterval(intervalId);
    }
    updateDrinks();
 } , 5000)

 if ( alcoholLvl >= 1000 ){
  console.log ('I am sorry, It`s time to leave the bar');
  document.getElementById('message').innerText = `time to leave`;
}
}







document.getElementById('start-button-final').onclick = () => {
     startGame()
     document.getElementById('container-game-screen').style.visibility = 'hidden'
    
}
