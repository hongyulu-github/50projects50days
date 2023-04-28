const btnOpen = document.getElementById("open")
const btnClose = document.getElementById("close")
const articleContainer = document.querySelector(".article_container")
const circle = document.querySelector(".circle")
const nav = document.querySelector(".nav")


btnOpen.addEventListener("click",()=>{
    articleContainer.classList.add("rotate");
    circle.classList.add("rotate")
    nav.classList.add("rotate")

}
)

btnClose.addEventListener("click",()=>{
    articleContainer.classList.remove("rotate");
    circle.classList.remove("rotate")
    nav.classList.remove("rotate")

}
)