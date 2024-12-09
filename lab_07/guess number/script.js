function startGame() {
    if(!confirm("Start new game\nCurrent balance: 100$")) {
        alert ("Game cancelled")
        return;
    }
}

let balance = 100;
let randomNumber = Math.floor(Math.random() * 6);
console.log("Random Number:", randomNumber);

for (let attempt = 0; attempt < 3; attempt++) {
    let givenNumber = prompt(`Guess the Number\nCurrent balance: ${balance}$`);
    console.log("Given Number:", givenNumber);

    if (parseInt(givenNumber) === randomNumber) {
        let reward = (3 - attempt) * 10 + 20; 
        balance += reward;
        alert(`Wow you won! Your reward - ${reward}$. Updated balance: ${balance}$`);
        break;

    } else {
        balance -= 10;
        if (attempt === 2) {
            alert(`Game over! The number was ${randomNumber}. Final balance: ${balance}$`);
        } else {
            alert(`Incorrect! Remaining attempts: ${2 - attempt}.`);
        }
    }
}
    
giveFeedback (attempt, balance, randomNumber)

startGame ()