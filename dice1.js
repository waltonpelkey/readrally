function createDice(number, value) {
    var dotPositionMatrix ={
        1: [
            [50, 50]
        ],
        2: [
            [20, 20],
            [80, 80]
        ],
        3: [
            [20, 20],
            [50, 50],
            [80, 80]
        ],
        4: [
            [20, 20],
            [20, 80],
            [80, 20],
            [80, 80]
        ],
        5: [
            [20, 20],
            [20, 80],
            [50, 50],
            [80, 20],
            [80, 80]
        ],
        6: [
            [20, 20],
            [20, 80],
            [50, 20],
            [50, 80],
            [80, 20],
            [80, 80]
        ]
    }

    var dice = document.createElement("div");
    var valueText = document.createElement("div");

    for (var dotPosition of dotPositionMatrix[number]) {
        var dot = document.createElement("div");

        dot.classList.add("dice-dot");
        dot.style.setProperty("--top", dotPosition[0] + "%");
        dot.style.setProperty("--left", dotPosition[1] + "%");
        dice.appendChild(dot);
    }

    dice.classList.add("dice");

    valueText.textContent = value;
    valueText.style.opacity = "1";
    valueText.classList.add("dice-value");
    dice.appendChild(valueText);

    return dice;
}

let currentPositionIndex = 0;
var currentPosition = -1;
var NUMBER_OF_DICE = 1;
var diceContainer = document.querySelector(".dice-container");
var btnRollDice = document = document.querySelector(".btn-roll-dice");

btnRollDice.addEventListener("click", () => {
    randomizeDice(diceContainer, NUMBER_OF_DICE);
});

function randomizeDice(diceContainer, numberOfDice) {
    diceContainer.innerHTML = "";
    for (let i = 0; i < numberOfDice; i++) {
        /* this is the value of the dice roll */
        var random = Math.floor((Math.random() * 6) + 1);
        var dice = createDice(random, random);

        diceContainer.appendChild(dice);

        currentPositionIndex +=  random;
    }
    if (movementList[currentPositionIndex] != undefined) {
        var currentPositionOnBoard = movementList[currentPositionIndex];
    
    
        var box = document.querySelectorAll('.box');
        
        if (currentPositionOnBoard >= 0) {
            box[currentPositionOnBoard].classList.add('glow');
        }
    }
    else {
        endgame();
    }
}

function endgame() {

    var box = document.querySelector('.end-box');

    box.classList.add('glow');


    for (elm of document.getElementsByClassName("btn-roll-dice")) {
        elm.setAttribute("hidden","hidden");
    }
    diceContainer.children[0].setAttribute("hidden","hidden");
}