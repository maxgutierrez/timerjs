const hoursContainer = document.querySelector("#hours-container");
const hoursSelected = document.querySelector("#hours-selected")
const hoursOptionList = document.querySelectorAll("#hour-option");

hoursSelected.addEventListener('click', ()=>{
  hoursContainer.classList.toggle('active');
  hoursSelected.classList.toggle('rotate');
})
hoursOptionList.forEach( minOption => {//em cada opt
  minOption.addEventListener('click', a => {//click para cada opt
    hoursSelected.innerHTML = minOption.querySelector('label').innerHTML;//selecionado = opt clicada
    hoursContainer.classList.remove('active');//fecha lista
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
  minOption.addEventListener('click', a => {//click para cada opt
    minutesSelected.innerHTML = minOption.querySelector('label').innerHTML;//selecionado = opt clicada
    minutesContainer.classList.remove('active');//fecha lista
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

startBtn.addEventListener('click', ()=>{
  stopBtn()
  clearInterval(interval)
  let currentHour = document.querySelector("#hours-selected").innerText.substring(0,2);
  let currentMinute = document.querySelector("#minutes-selected").innerText.substring(0,2);
  let currentSecond = document.querySelector("#seconds-selected").innerText.substring(0,2);

  displayTime.innerHTML = `${currentHour}:${currentMinute}:${currentSecond}`

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
      displayBtn.innerHTML = "<button id='stopBtn' onclick='stopBtn()'> PARAR </button>"
      clearInterval(interval);
    }
    displayTime.innerHTML = `${currentHour}:${currentMinute}:${currentSecond}`
  },1000);
})
function stopBtn(){
  audio.pause();
  displayBtn.innerHTML = '';
}