
let displayStop = document.querySelector("#display")
let startBtn = document.querySelector("#startBtn");
let selectMinutes = document.querySelector("#minutes");
let selectSeconds = document.querySelector("#seconds");
let audio = document.querySelector("#audio");

let timerSec; // conometroSeg
let currentSecond;
let currentMinute;
let interval;

//preencher o select com as options de 0 a 60
for (let i = 0; i <= 60; i++){
  selectMinutes.innerHTML += `<option value="${i}"> ${i} Minutos</option>`;
  selectSeconds.innerHTML += '<option value="' +i+ '">' +i+ ' Segundos</option>';
}

startBtn.addEventListener('click', function(){
  let displayTime = document.querySelector("#display > *");
  clearInterval(interval);
  let currentMinute = selectMinutes.value;
  let currentSecond = selectSeconds.value;
  
  displayTime.innerText = `${currentMinute}:${currentSecond}`
  
  interval = setInterval(function(){
    
    if (currentSecond > 0) {
      currentSecond--
    }else if (currentMinute > 0){
      currentMinute--
      currentSecond = 59
    }else {
      audio.loop = true;
      audio.play();
      displayStop.innerHTML = "<button id='stopBtn' onclick='stopBtn()'> PARAR </button>"
      clearInterval(interval);
    }
    displayTime.innerText = `${currentMinute}:${currentSecond}`
  },1000);
  
})

function stopBtn(){
  audio.pause();
  displayStop.innerHTML = '<h3 id="displayTime">00:00</h3>';
}

// SELECT PESONALIZADO


