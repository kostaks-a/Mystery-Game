const water = new Image()
water.src = "./images/water.png"


const cola = new Image()
cola.src = "./images/cola 1.png"

const beer = new Image()
beer.src = "./images/beer.png"

const eMartini = new Image()
eMartini.src = "./images/e-martini.png"

const drinksArray = []
drinksArray.push(water, cola, beer, eMartini)

const audio = new Audio()
audio.src = "./audio/Donato Dozzy-ST.mp3"


let score = 0
let beersTotal = 0
let martinisTotal = 0
let drinksTotal = 0
let alcoholLvl = 0
let randomDrink = ``
let timer = 0
let arrData = []
let newArray = []
let scoreElem = document.getElementById('score')
let timerElem = document.getElementById('timer')
let alcoholElem = document.getElementById('alcohol-level')
let drinksElem = document.getElementById('drinks-consumed')
let counter = 0


const message = document.getElementById('message')
const messageB1 = document.getElementById('message-1')
const messageB2 = document.getElementById('message-2')
const drinkButton = document.getElementById('drink-button')
const drinkIcon = document.querySelector('.drink')
const playText = document.getElementById('play-text')
const playButton = document.getElementById('play-button')
const winScreen = document.querySelector('#win-screen')
const gameScreen = document.querySelector('#game-screen')
const replayButton = document.getElementById('replay-button')

function calculation(drinkType){
   if (drinkType.src.includes(`water`))
    {
    if (alcoholLvl>0){
    alcoholLvl += 35
    }else{
    score += 10
  }}
  else if (drinkType.src.includes(`cola`)){
    alcoholLvl += 35
    score += 25
   }
  else if (drinkType.src.includes(`beer`)){
    alcoholLvl += 35
    score += 100
    beersTotal++
    }
  else if (drinkType.src.includes(`artini`)){
    alcoholLvl += 35
    score += 200
    martinisTotal++
  }
  drinksTotal = beersTotal + martinisTotal
  timer = timer + 15
  //arrData[0] = score
  //arrData[1] = timer
  //arrData[2] = alcoholLvl
  //arrData[3] = drinksTotal

  //arrData.push(score, timer ,alcoholLvl , drinksTotal)
  scoreElem.innerText = score ;
  timerElem.textContent = timeConverter(timer) ;
  alcoholElem.innerHTML = `${alcoholLvl} %`;
  drinksElem.innerText = drinksTotal;
  //console.log (`${arrData}`)
  return arrData;
}




function bartenderMsg(drinkType) {
  message.style.visibility = 'visible'
  if (drinkType.src.includes(`water`)){
    messageB1.innerText = 'Looks like you need some water'
    messageB2.innerText = 'Here you are..'
  }
  else if (drinkType.src.includes(`cola`)){
    messageB1.innerText = 'Just a cola for you this time'
    messageB2.innerText = 'You have to take it easy'
    }
  else if (drinkType.src.includes(`beer`)){
    messageB1.innerText = 'Here is a beer for you'
    messageB2.innerText = 'Enjoy :)'
    }
  else if (drinkType.src.includes(`martini`)){
    messageB1.innerText = 'Espresso Martini time'
    messageB2.innerText = 'Is gonna be a long night...'
  }
}




function timeConverter(minutes){
  if (minutes < 60){
    return `${minutes} m.`}
  else if (minutes % 60 === 0){
    return `${minutes / 60} h.`
  }else {
    return `${parseInt(minutes/60)}h:${minutes%60}m`;
  }  
}

function mysteryBox(){
  const box = document.createElement('img')
  box.src = "./images/box.png"
  box.classList.add("box")
  document.body.appendChild(box)
}

function  appendDrink(){
  randomDrink = drinksArray[Math.floor(Math.random() * drinksArray.length)];
  const img = document.createElement('img')
  img.src = randomDrink.src
  img.classList.add("drink")
  document.body.appendChild(img)
  bartenderMsg(randomDrink)
  calculation(randomDrink)
  //console.log (arrData)
}


function initialize(){
  drinkButton.style.visibility = 'visible'
  drinkButton.onclick = () => {
    document.querySelector('.box').style.visibility = 'hidden'
    drinkButton.style.visibility = 'hidden'
    appendDrink()
}}

  
function updateDrinks(){
    document.querySelector('.box').style.visibility = 'visible'
    drinkButton.style.visibility = 'visible'
    let drinkIcon = document.querySelector('.drink')
    if (drinkIcon != null){
    document.querySelector('.drink').remove()}
    message.style.visibility = 'hidden'
    initialize();
}



function reloadGame(){
  winScreen.style.display = 'none'
  gameScreen.style.removeProperty('display')
  message.style.visibility = 'hidden'
  repeatGame()
}

///////GAME START FUNCTION ///////

function startGame(){
  
  mysteryBox()
  initialize()
  const intervalId = setInterval(function () {
    if (alcoholLvl >= 100 ){     
      document.querySelector('.drink').remove()
      message.style.visibility = 'hidden'
      messageB1.innerText = `I am sorry...`;
      messageB2.innerText = `It's time to leave the bar`;
      message.style.visibility = 'visible'
      playText.innerText = 'Play again'
      playText.style.visibility = 'visible'
      playButton.style.visibility = 'visible'
      document.querySelector('.box').style.display = 'none'
      loadGame()
      clearInterval(intervalId);
      return;
    }
   else if( timer >= 30 && alcoholLvl < 110){
    drinkButton.style.visibility = 'hidden'
    gameScreen.style.display = 'none'
    document.querySelector('.box').style.display = 'none'
    winScreen.style.removeProperty('display')
    replayButton.onclick = () => {
      console.log ("oeo")
      winScreen.style.display = 'none'
      gameScreen.style.removeProperty('display')
      message.style.visibility = 'hidden'
      document.querySelector('.box').style.display = 'none'
      drinkButton.style.visibility = 'hidden'
      playText.style.visibility = 'visible'
      playButton.style.visibility = 'visible'
      document.querySelector('.box').remove()
      loadGame()


      }   
    }
     
/* 
       setTimeout(() => {
        clearInterval(intervalId);
         return;
        }, 100000)
       //clearInterval(intervalId);
       //return;

  
     }
*/
    updateDrinks();
 } , 10000)
}

     
    


function loadGame(){
  //document.querySelector('#registration-page').style.display = "none"
  
  //document.querySelector('#game-screen').style.removeProperty('display')
  score = 0
  beersTotal = 0
  martinisTotal = 0
  drinksTotal = 0
  alcoholLvl = 0
  timer = 0
  scoreElem.innerText = 0 ;
  timerElem.textContent = timeConverter(0) ;
  alcoholElem.innerHTML = `0 %`;
  drinksElem.innerText = 0;
    playButton.onclick = () => {
    message.style.visibility = 'hidden'
    playButton.style.visibility = 'hidden'
    playText.style.visibility = 'hidden'
    startGame()
    
  }
}
winScreen.style.display = "none"
loadGame()
/*function registration(){
  document.querySelector('#game-intro').style.display = "none"
  document.querySelector('#registration-page').style.removeProperty('display')
  //audio.play();
  document.getElementById('start-button').style.visibility = 'visible'
  document.getElementById('start-button').onclick = () => {
    loadGame()
  }

}
*/

//document.getElementById('game-screen').style.display = 'none'
//window.onload = () => {
//let sign = prompt("Welcome to Mystery Bar. What is your name?");
//document.getElementById('name').innerText += sign
//}
//////// STARTING PAGE ////

/*window.onload = () => {
   document.querySelector('#game-screen').style.display = "none"
   document.querySelector('#registration-page').style.display = "none"
   document.getElementById('enter-button').onclick = () => {
    registration()
   }
  }
  */