let currentHour;
let currentMinute;
let currentSecond;


const hoursContainer = document.querySelector("#hours-container");
const hoursSelected = document.querySelector("#hours-selected");
const hoursOptionList = document.querySelectorAll("#hour-option");

hoursSelected.addEventListener('click', ()=>{
  hoursContainer.classList.toggle('active');
  hoursSelected.classList.toggle('rotate');
})
hoursOptionList.forEach( hourOption => {//em cada opt
  hourOption.addEventListener('click', () => {//click para cada opt
    hoursSelected.innerHTML = hourOption.querySelector('label').innerHTML;//selecionado = opt clicada
    hoursContainer.classList.remove('active');//fecha lista
    hoursSelected.classList.remove('rotate');

  })
})
///////////////////////////////////////////////
const minutesContainer = document.querySelector("#minutes-container");
const minutesSelected = document.querySelector("#minutes-selected")
const minutesOptionList = document.querySelectorAll("#minute-option");

minutesSelected.addEventListener('click', ()=>{
  minutesContainer.classList.toggle('active');
  minutesSelected.classList.toggle('rotate');
})
minutesOptionList.forEach( minOption => {//em cada opt
  minOption.addEventListener('click', () => {//click para cada opt
    minutesSelected.innerHTML = minOption.querySelector('label').innerHTML;//selecionado = opt clicada
    minutesContainer.classList.remove('active');//fecha lista
    minutesSelected.classList.remove('rotate');

  })
})
//////////////////////////////////////////////////////////
const secondsContainer = document.querySelector("#seconds-container");
const secondsSelected = document.querySelector("#seconds-selected");
const secondsOptionList = document.querySelectorAll("#second-option");

secondsSelected.addEventListener('click', () => {//click no selecionado
  secondsContainer.classList.toggle('active');//abre a lista
  secondsSelected.classList.toggle('rotate');
});

secondsOptionList.forEach( secOption => {//em cada opt
  secOption.addEventListener('click', () => {//click para cada opt
    secondsSelected.innerHTML = secOption.querySelector('label').innerHTML;//selecionado = opt clicada
    secondsContainer.classList.remove('active');//fecha lista
    secondsSelected.classList.remove('rotate');

  })
})
//++++++++++++++++++++++++++++++++++++++++++++++++++
//botao start
const startBtn = document.querySelector("#start-btn");
const displayTime = document.querySelector("#display-time");
let interval;
const audio = document.querySelector("#audio");
let displayBtn = document.querySelector("#display-btn")
//pegar os dois primeiros digitos

function count() {
  interval = setInterval(function(){
    if(currentSecond > 0){
      currentSecond--
    }else if(currentMinute > 0){ 
      currentMinute--
      currentSecond = 59
    }else if(currentHour >0){
      currentHour--
      currentMinute = 59
      currentSecond = 59
    }else{
      audio.loop = true;
      audio.play(); 
      clearInterval(interval);
      stopBtn.style = "display:inline"
      pauseBtn.style = "display:none"
    }
    displayTime.innerHTML = `${currentHour}:${currentMinute}:${currentSecond}`
  },1000); 
}

startBtn.addEventListener('click', ()=>{
  clearInterval(interval)
  currentHour = document.querySelector("#hours-selected").innerText.substring(0,2);
  currentMinute = document.querySelector("#minutes-selected").innerText.substring(0,2);
  currentSecond = document.querySelector("#seconds-selected").innerText.substring(0,2);

  displayTime.innerHTML = `${currentHour}:${currentMinute}:${currentSecond}`
  
  count();
  startBtn.style = "display:none"
  pauseBtn.style = "display:inline"
  restartBtn.style ="display:inline"
  
}) 
//stop-btn 
let stopBtn =  document.querySelector("#stop-btn");

stopBtn.addEventListener('click',()=>{
  audio.pause();
  stopBtn.style = "display:none"
  startBtn.style = "display:inline"
  restartBtn.style ="display:none"
})


//pause-btn
const pauseBtn = document.querySelector("#pause-btn");
pauseBtn.addEventListener('click', ()=> {
  clearInterval(interval);
  continueBtn.style = "display:inline"
  pauseBtn.style = "display:none"
})
//continue-btn
const continueBtn = document.querySelector("#continue-btn");
continueBtn.addEventListener('click', ()=>{
  count()
  continueBtn.style = "display:none"
  pauseBtn.style = "display:inline"
}) 
//restart-btn
const restartBtn = document.querySelector("#restart-btn");
restartBtn.addEventListener('click',()=>{
  audio.pause();
  stopBtn.style = "display:none"
  continueBtn.style = "display:none"
  pauseBtn.style = "display:inline"
  clearInterval(interval)
  currentHour = document.querySelector("#hours-selected").innerText.substring(0,2);
  currentMinute = document.querySelector("#minutes-selected").innerText.substring(0,2);
  currentSecond = document.querySelector("#seconds-selected").innerText.substring(0,2);

  displayTime.innerHTML = `${currentHour}:${currentMinute}:${currentSecond}`
  
  count();
})
