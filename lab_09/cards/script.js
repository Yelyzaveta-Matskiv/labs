let emojis = ['🍎', '🍌', '🍒', '🍇'];
    let cards, flippedCards = [], matchedPairs = 0, moves = 0;
    let shuffleCards = () => cards.sort(() => Math.random() - 0.5);
    let createBoard = () => {
    cards = [...emojis, ...emojis];
     shuffleCards();
        document.getElementById('gameBoard').innerHTML = cards.map((emoji, index) => 
        `<div class="card" data-index="${index}"><div class="card-content">${emoji}</div></div>`
        ).join('');
        document.querySelectorAll('.card').forEach(card => card.addEventListener('click', flipCard));
        };

let flipCard = function() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
         flippedCards.push(this);
     if (flippedCards.length === 2) {
        moves++;
        document.getElementById('moves').textContent = `Moves: ${moves}`;
        setTimeout(checkMatch, 500);
        }
    }
};

let checkMatch = () => {
let [card1, card2] = flippedCards;
if (card1.textContent === card2.textContent) {
    matchedPairs++;
if (matchedPairs === emojis.length) {
    alert("Congratulations! You won!");
    setTimeout(() => {
    document.getElementById('message').textContent = '';
    resetGame();
    }, 2000);
}
} else {
    flippedCards.forEach(card => card.classList.remove('flipped'));
}
    flippedCards = [];
};

const resetGame = () => {
    matchedPairs = moves = 0;
    document.getElementById('moves').textContent = 'Moves: 0';
    createBoard();
};

createBoard();