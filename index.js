myCanvas = document.querySelector('canvas')
ctx = myCanvas.getContext('2d')

///// Drinks img init/////
const mysteryBox = new Image()
mysteryBox.src =  "/images/box.png"

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


class drinks {
  constructor (width, height , x , y){
    this.width = width
    this.height = height
    this.x = x
    this.y = y
  }
}
////////////////////////////
let animatedId
let frames = 0


document.querySelector('#registration-page').style.display = "none"



document.querySelector('#game-screen').style.display = "none"

function registerPage(){
    document.querySelector('#registration-page').style.display = "block" 
}

//////// REGISTRATION PAGE ////

window.onload = () => {
    document.getElementById('enter-button').onclick = () => {
    document.querySelector('.game-intro').style.display = "none"
    
  registerPage();
  };
}

///////GAME START PAGE ///////
function updateDrinks(){
  frames++
  if (frames % 200 === 0){
   // console.log("whatever")
    ctx.drawImage( eMartini , 125 , 65 , 30 , 30)
  }
  

}


function animate(){
  //ctx.drawImage(mysteryBox , 150 , 80 , 40 , 35)
  updateDrinks()

  animatedId = requestAnimationFrame(animate)
}



function startGame(){
  
  document.querySelector('#registration-page #start-button').parentElement.remove()
  document.querySelector('#game-screen').style.display = "block"
  animate()


}


document.getElementById('start-button').onclick = () => {
      startGame();
    };
