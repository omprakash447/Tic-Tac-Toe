let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#new");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0;

const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const checkWinner = () => {
    for (let pattern of patterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== '' && pos2 !== '' && pos3 !== '') {
            if (pos1 === pos2 && pos2 === pos3) {
                printWinner(pos1)
            }
        }

    }

}

const drawAlert = () => {
    msg.innerText = "Oops! It's a draw game";
    msgContainer.classList.remove("hide");
}

const printWinner = (winner) => {
    msg.innerText = `${winner} won the match`;
    msgContainer.classList.remove("hide");
    boxDisable()
}

const boxDisable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const boxEnable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = " "
    }
}

const gameReset = () => {
    turnO = true;
    boxEnable()
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            drawAlert();
        }
    })
})

reset.addEventListener("click", gameReset);
newBtn.addEventListener("click", gameReset);