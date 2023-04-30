const boxes = document.querySelectorAll(".box")




const showBoxes=()=>{
    const distance = window.innerHeight/5*4

    boxes.forEach(box =>{
        const boxTopinVP = box.getBoundingClientRect().top

        if(boxTopinVP < distance){
            box.classList.add("show")
        } else{
            box.classList.remove("show")
        }
    })
}

showBoxes()
window.addEventListener("scroll",showBoxes)