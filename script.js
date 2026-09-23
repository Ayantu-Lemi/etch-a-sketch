const container = document.getElementById("container");

function createGrid(userValue = 16) {
    const fragment = document.createDocumentFragment();
    const boardSize = 500;
    const y = userValue * userValue;
    const squareSize = boardSize / userValue;

    for (let i = 1; i <= y; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "box";
        newDiv.style.width = `${squareSize}px`;
        newDiv.style.height = `${squareSize}px`;
        fragment.appendChild(newDiv);
    }

    container.appendChild(fragment);
}

const button = document.getElementById("button");

button.addEventListener("click", () => {
    let userValue = parseInt(prompt("How many squares per side? (1-100)"));

    if (Number.isNaN(userValue)) {
        while (Number.isNaN(userValue)) {
            alert("Please enter a number!");
            userValue = parseInt(prompt("How many squares per side? (1-100)"));
        }
    } 
    else if (userValue >= 1 && userValue <= 100) {
        container.replaceChildren();
        createGrid(userValue);
        return;
    } 
    else {
        while (userValue < 1 || userValue > 100) {
            alert("Please enter a valid number between 1 and 100");
            userValue = parseInt(prompt("How many squares per side? (1-100)"));
        }
    }

    container.replaceChildren();
    createGrid(userValue);
});

createGrid(16);