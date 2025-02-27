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

let chronoContent = document.querySelector("#chronocount")
let chronoValue = 15

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
    p1score = 0;
    p2score = 0;
    p1ScoreText.textContent = 0;
    p2ScoreText.textContent = 0;
    let chronoCounter = chronoValue
    chronoContent.textContent = chronoValue + "s"
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
restartButton.addEventListener("click", () => {
    p1score = 0;
    p2score = 0;
    p1ScoreText.textContent = 0;
    p2ScoreText.textContent = 0;
    let chronoCounter = chronoValue
    chronoContent.textContent = chronoValue + "s"
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
    p1score = 0;
    p2score = 0;
    p1ScoreText.textContent = 0;
    p2ScoreText.textContent = 0;
    let chronoCounter = chronoValue
    chronoContent.textContent = chronoValue + "s"
})

let p1score = 0;
let p2score = 0;
let p1ScoreText = document.querySelector("#p1score")
let p2ScoreText = document.querySelector("#p2score")

const col1 = document.querySelector("#column1");
const col2 = document.querySelector("#column2");
const col3 = document.querySelector("#column3");
const col4 = document.querySelector("#column4");
const col5 = document.querySelector("#column5");
const col6 = document.querySelector("#column6");
const col7 = document.querySelector("#column7");


const gamegrid = [
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ]
];

const winnerGrid1 = [
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "X", "X", "X", "X",  "", "", "" ]
];

const winnerGrid2 = [
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "x", "", "", "",  "", "", "" ],
    [ "x", "", "", "",  "", "", "" ],
    [ "x", "", "", "",  "", "", "" ],
    [ "x", "", "", "",  "", "", "" ]
];

const winnerGrid3 = [
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "X",  "", "", "" ],
    [ "", "", "X", "",  "", "", "" ],
    [ "", "X", "", "",  "", "", "" ],
    [ "X", "", "", "",  "", "", "" ]
];

const winnerGrid4 = [
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "O", "", "" ],
    [ "", "", "", "X",  "", "", "" ],
    [ "", "", "X", "O",  "", "", "" ],
    [ "", "O", "O", "O",  "", "", "" ],
    [ "X", "O", "O", "O",  "O", "", "" ]
];

const loserGrid1 = [
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "X",  "", "", "" ],
    [ "", "", "X", "O",  "", "", "" ],
    [ "", "O", "O", "O",  "", "", "" ],
    [ "X", "O", "O", "X",  "O", "", "" ]
];

function checkWinner(grille) {
// coder ici
}

let resultat = "";

resultat = checkWinner(winnerGrid1); // retourne "X"
resultat = checkWinner(winnerGrid2); // retourne "X"
resultat = checkWinner(winnerGrid3); // retourne "X"
resultat = checkWinner(winnerGrid4); // retourne "O"
resultat = checkWinner(loserGrid1); // retourne ""
