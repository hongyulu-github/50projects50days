const leftPart = document.querySelector(".left")
const rightPart = document.querySelector(".right")
const container = document.querySelector(".container")

leftPart.addEventListener("mouseenter", ()=>{
    container.classList.add("hover-left")
})
leftPart.addEventListener("mouseleave", ()=>{
    container.classList.remove("hover-left")
})
rightPart.addEventListener("mouseenter", ()=>{
    container.classList.add("hover-right")
})
rightPart.addEventListener("mouseleave", ()=>{
    container.classList.remove("hover-right")
})