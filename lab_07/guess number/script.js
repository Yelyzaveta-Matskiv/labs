function startGame() {
    if (!confirm("Start new game\nCurrent balance: 100$")) {
        alert("Game canceled");
        return;
    }

    let balance = 100;
    const randomNumber = generateRandomNumber(6);
    console.log("Random Number:", randomNumber);

    for (let attempt = 1; attempt <= 3; attempt++) {
        const givenNumber = prompt(`Guess the Number\nCurrent balance: ${balance}$`);
        console.log("Given Number:", givenNumber);

        if (isCorrectGuess(givenNumber, randomNumber)) {
            alert("Wow you won!");
            break;
            
        } else {
            balance -= 10;
            giveFeedback(attempt, balance, randomNumber);
        }
    }
}

function generateRandomNumber(range) {
    return Math.floor(Math.random() * range);
}

function isCorrectGuess(userInput, correctNumber) {
    return parseInt(userInput) === correctNumber;
}

function giveFeedback(attempt, correctNumber) {
    if (attempt === 3) {
        alert("Oh no, game over! Try again");
    } else {
        alert("Incorrect!");
    }
}

startGame();


    