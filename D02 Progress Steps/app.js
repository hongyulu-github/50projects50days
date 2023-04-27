// button to control : 
//1. progress-bar-after width  
//2. circle avtive and its color

const btnPrev = document.getElementById("btn-prev")
const btnNext = document.getElementById("btn-next")
const progressBarAfter = document.getElementById("progress-bar-after")
const circles = document.querySelectorAll(".circle")

const handleNext =()=>{
 
  if(progressBarAfter.offsetWidth< 360)
  progressBarAfter.style.width = progressBarAfter.offsetWidth + 120 +"px";
  switch(progressBarAfter.offsetWidth){
    case 0:
      circles[1].classList.add('active');
      break;
    case 120:
      circles[2].classList.add('active');
      break;
    case 240:
      circles[3].classList.add('active');
      break;
  }
 
}

btnNext.addEventListener("click",()=>{
  handleNext()
})

const handlePrev =()=>{
  
  if(progressBarAfter.offsetWidth > 0)
  progressBarAfter.style.width = progressBarAfter.offsetWidth - 120+"px";
  switch(progressBarAfter.offsetWidth){
    case 120:
      circles[1].classList.remove('active');
      break;
    case 240:
      circles[2].classList.remove('active');
      break;
    case 360:
      circles[3].classList.remove('active');
      break;
  }
}

btnPrev.addEventListener("click",()=>{
  handlePrev()
})