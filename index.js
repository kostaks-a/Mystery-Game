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

function calculation(drinkType){
   
    if (drinkType.src.includes(`water`))
    {
    if (alcoholLvl>0){
    alcoholLvl -= 10
    }else{
    score += 0
  }}
  else if (drinkType.src.includes(`cola`)){
    alcoholLvl -= 10
    score += 25
   }
  else if (drinkType.src.includes(`beer`)){
    alcoholLvl += 20
    score += 100
    beersTotal++
    }
  else if (drinkType.src.includes(`artini`)){
    alcoholLvl += 25
    score += 200
    martinisTotal++
  }
  drinksTotal = beersTotal + martinisTotal
  timer = timer + 150
  arrData[0] = score
  arrData[1] = timer
  arrData[2] = alcoholLvl
  arrData[3] = drinksTotal

  //arrData.push(score, timer ,alcoholLvl , drinksTotal)
  scoreElem.innerText = score ;
  timerElem.textContent = timeConverter(timer) ;
  alcoholElem.innerHTML = `${alcoholLvl} %`;
  drinksElem.innerText = drinksTotal;
  console.log (`${arrData}`)
  return arrData;
}


function bartenderMsg(drinkType) {
  document.getElementById('message').style.visibility = 'visible'
  if (drinkType.src.includes(`water`)){
    document.getElementById('message-1').innerText = 'Looks like you need some water'
    document.getElementById('message-2').innerText = 'Here you are..'
  }
  else if (drinkType.src.includes(`cola`)){
    document.getElementById('message-1').innerText = 'Just a cola for you this time'
    document.getElementById('message-2').innerText = 'You have to take it easy'
    }
  else if (drinkType.src.includes(`beer`)){
    document.getElementById('message-1').innerText = 'Here is a beer for you'
    document.getElementById('message-2').innerText = 'Enjoy :)'
    }
  else if (drinkType.src.includes(`martini`)){
    document.getElementById('message-1').innerText = 'Espresso Martini time'
    document.getElementById('message-2').innerText = 'Is gonna be a long night...'
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
  console.log (arrData)

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
    const drinkExists = document.querySelector('.drink')
    if (drinkExists != null){
    document.querySelector('.drink').remove()}
    document.getElementById('message').style.visibility = 'hidden'
    //document.getElementById('message-1').innerText = ''
    //document.getElementById('message-2').innerText = ''
    initialize();
}


function repeatGame(){
   document.getElementById('play-text').innerText = 'Play again'
   document.getElementById('play-text').style.visibility = 'visible'
   document.getElementById('play-button').style.visibility = 'visible'
      loadGame()
    }

function reloadGame(){
  document.querySelector('.win-screen').style.display = 'none'
  document.querySelector('#game-screen').style.removeProperty('display')
  document.getElementById('message').style.visibility = 'hidden'
  repeatGame()
    }

///////GAME START PAGE ///////

function startGame(){
 score = 0
 alcoholLvl = 0
 timer = 0
 scoreElem.innerText = score ;
  mysteryBox()
  document.getElementById('drink-button').style.visibility = 'visible'
  initialize()
  const intervalId = setInterval(function () {
    if (alcoholLvl >= 100 ){
      newArray = calculations(drinkType)
      document.querySelector('.drink').remove()
      document.getElementById('message-1').innerText = `I am sorry...`;
      document.getElementById('message-2').innerText = `It's time to leave the bar`;
      
      repeatGame()
      clearInterval(intervalId);
      return;
    }
    else if( timer >= 90 && alcoholLvl < 100){
      
      //console.log (newArray)
      document.getElementById('game-screen').style.display = 'none'
      document.querySelector('.box').style.display = 'none'
      document.querySelector('.drink').style.display = 'none'
      document.querySelector('.win-screen').style.display = 'block'
      document.getElementById('replay-button').onclick = () => {
        
        reloadGame()
      }    
     //document.querySelector('.box').style.display = 'none'
     // setTimeout(() => { repeatGame() })

       //setTimeout(() => {
       //  clearInterval(intervalId);
       //    return;
       // }, 10000)
       //clearInterval(intervalId);
       //return;

  
     }

    updateDrinks();
 } , 10000)
}

     
    


function loadGame(){
  //document.querySelector('#registration-page').style.display = "none"
  
  //document.querySelector('#game-screen').style.removeProperty('display')
  document.getElementById('play-button').onclick = () => {
    
    document.getElementById('play-button').style.visibility = 'hidden'
    document.getElementById('play-text').style.visibility = 'hidden'

    startGame()
    
  }
}

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