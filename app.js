const menuDialog = document.querySelector(".menu")
const pauseDialog = document.querySelector(".pause")
const rulesDialog = document.querySelector(".rules")

const header = document.querySelector("header")
const sectionmain = document.querySelector(".sectionmain")
const chrono = document.querySelector(".chronosection")

const menuButton = document.querySelector("#menubtn")
const restartButton = document.querySelector("#restartbtn")
const rulesButton = document.querySelector("#gamerulesbtn")
const pvpButton = document.querySelector("#pvpbtn")

const rulescheck = document.querySelector(".acceptrulesbtn")

const pauseContinue = document.querySelector("#pausecontinue")
const pauseRestart = document.querySelector("#pauserestart")
const pauseQuit = document.querySelector("#pausequit")


window.addEventListener("load", () => {
    menuDialog.showModal();
    sectionmain.classList.add("hidden")
    header.classList.add("hidden")
    chrono.classList.add("hidden")
});

pvpButton.addEventListener("click", () => {
    sectionmain.classList.remove("hidden")
    header.classList.remove("hidden")
    chrono.classList.remove("hidden")
    menuDialog.close();
})

rulesButton.addEventListener("click", () => {
    rulesDialog.showModal();
    menuDialog.close();
})

rulescheck.addEventListener("click", () => {
    rulesDialog.close();
    menuDialog.showModal();
})

menuButton.addEventListener("click", () => {
    pauseDialog.showModal();
})

pauseContinue.addEventListener("click", ()=> {
    pauseDialog.close();
})
pauseRestart.addEventListener("click", ()=> {
})
pauseQuit.addEventListener("click", ()=> {
    sectionmain.classList.add("hidden")
    header.classList.add("hidden")
    chrono.classList.add("hidden")
    pauseDialog.close();
    menuDialog.showModal();
})