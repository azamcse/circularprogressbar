


const progressbar = document.querySelector(".circular_progress")
const progressValue = document.querySelector(".progress_value");

let speed = 20;
let progressStartValue = 0;
let progressEndValue = 90;

let progress = setInterval(()=>{
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}`
    
    progressbar.style.background = `conic-gradient( blue ${progressStartValue * 3.6}deg , #242323 0)`;

    if( progressStartValue == progressEndValue){
        clearInterval(progress)
    }
   

    
},speed)