const myCanvas = document.querySelector('canvas')
const ctx = myCanvas.getContext('2d')
document.querySelector('#registration-page').style.visibility = "hidden"

function registerPage(){
    document.querySelector('#registration-page').style.visibility = "visible"  
}

//// START GAME -> REGISTRATION PAGE ////

window.onload = () => {
    document.getElementById('enter-button').onclick = () => {
    console.log ('paok')
    const parent = document.querySelector('.game-intro #enter-button')
    parent.parentElement.remove();
    registerPage();
  };
}



/*window.onload = () => {
    document.getElementById('ready-button').onclick = () => {
      startGame;
    };
}*/