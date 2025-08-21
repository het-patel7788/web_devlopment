// 🎮 GAME STATE VARIABLES
let gameMode = '';
let currentPlayer = 1;
let isComputerMode = false;
let cardsFlippedThisTurn = 0;
let flippedCards = [];
let gameBoard = [];
let scores = { player1: 0, player2: 0, computer: 0, human: 0 };
let isGameActive = true;
let canFlipCards = true;

// 🤖 COMPUTER AI VARIABLES
let computerMemory = {}; // Stores position: symbol pairs
let computerKnownPairs = []; // Stores pairs computer knows about

// 🎴 CARD SYMBOLS (7 pairs + 1 joker)
const cardSymbols = [
    '⭐', '⭐', // Pair 1
    '❤️', '❤️', // Pair 2  
    '🌟', '🌟', // Pair 3
    '🎵', '🎵', // Pair 4
    '👍', '👍', // Pair 5
    '🎯', '🎯', // Pair 6
    '⚡', '⚡', // Pair 7
    '🃏'        // Joker (single card)
];

// 📱 PAGE SWITCHING
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// 🚀 GAME INITIALIZATION
function startGame(mode) {
    gameMode = mode;
    isComputerMode = (mode === 'computer');
    currentPlayer = 1;
    cardsFlippedThisTurn = 0;
    flippedCards = [];
    scores = { player1: 0, player2: 0, computer: 0, human: 0 };
    isGameActive = true;
    canFlipCards = true;
    computerMemory = {};
    computerKnownPairs = [];

    // Shuffle cards
    gameBoard = shuffleArray([...cardSymbols]);

    // Show appropriate page and create board
    if (isComputerMode) {
        showPage('computer-page');
        createCardBoard('computer-cards');
        updateComputerUI();
    } else {
        showPage('person-page');
        createCardBoard('person-cards');
        updatePersonUI();
    }
}

// 🎲 SHUFFLE FUNCTION
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 🎴 CREATE CARD BOARD
function createCardBoard(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    for (let i = 0; i < 15; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.position = i;
        card.dataset.symbol = gameBoard[i];
        card.textContent = '?';
        card.addEventListener('click', () => handleCardClick(card, i));
        container.appendChild(card);
    }
}

// 🖱️ HANDLE CARD CLICKS
function handleCardClick(cardElement, position) {
    if (!canFlipCards || !isGameActive) return;
    if (cardElement.classList.contains('flipped') || cardElement.classList.contains('matched')) return;
    if (cardsFlippedThisTurn >= 2) return;

    // In computer mode, only allow human clicks on human turn
    if (isComputerMode && currentPlayer === 2) return;

    // Flip the card
    flipCard(cardElement, position);
    flippedCards.push({ element: cardElement, position: position, symbol: gameBoard[position] });
    cardsFlippedThisTurn++;

    // Check if this is the second card
    if (cardsFlippedThisTurn === 2) {
        canFlipCards = false;
        setTimeout(checkMatch, 1000); // Wait 1 second to show both cards
    }
}

// 🔄 FLIP CARD ANIMATION
function flipCard(cardElement, position) {
    cardElement.classList.add('flipped');
    cardElement.textContent = gameBoard[position];

    // Special styling for joker
    if (gameBoard[position] === '🃏') {
        cardElement.classList.add('joker');
    }
}

// ✅ CHECK FOR MATCH
function checkMatch() {
    const card1 = flippedCards[0];
    const card2 = flippedCards[1];

    // Check for joker penalty
    if (card1.symbol === '🃏' || card2.symbol === '🃏') {
        handleJokerPenalty();
        return;
    }

    // Check for match
    if (card1.symbol === card2.symbol) {
        // MATCH FOUND!
        card1.element.classList.add('matched');
        card2.element.classList.add('matched');

        updateScore(1);
        updateStatus('🎉 Match found! Go again!');

        // Same player goes again - FIXED: Use proper resetTurn function
        resetTurnData();

        // Check win condition
        if (getCurrentScore() >= 4) {
            endGame();
            return;
        }
    } else {
        // NO MATCH
        updateStatus('❌ No match. Cards flipping back...');

        setTimeout(() => {
            card1.element.classList.remove('flipped', 'joker');
            card2.element.classList.remove('flipped', 'joker');
            card1.element.textContent = '?';
            card2.element.textContent = '?';

            switchPlayer();
            resetTurnData();
        }, 1500);
    }
}

// 🃏 HANDLE JOKER PENALTY
function handleJokerPenalty() {
    updateScore(-1);
    updateStatus('💀 Joker found! -1 point penalty!');

    setTimeout(() => {
        flippedCards.forEach(card => {
            card.element.classList.remove('flipped', 'joker');
            card.element.textContent = '?';
        });

        switchPlayer();
        resetTurnData();
    }, 2000);
}

// 🔄 RESET TURN DATA - FIXED: Renamed to avoid duplicate function names
function resetTurnData() {
    cardsFlippedThisTurn = 0;
    flippedCards = [];
    canFlipCards = true;
    updateUI();

    // FIXED: Properly trigger computer turn when it's computer's turn
    if (isComputerMode && currentPlayer === 2 && isGameActive) {
        setTimeout(computerTurn, 1000);
    }
}

// 🔀 SWITCH PLAYER
function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    updateUI();
}

// 📊 UPDATE SCORE
function updateScore(points) {
    if (isComputerMode) {
        if (currentPlayer === 1) {
            scores.human += points;
        } else {
            scores.computer += points;
        }
    } else {
        if (currentPlayer === 1) {
            scores.player1 += points;
        } else {
            scores.player2 += points;
        }
    }
    updateUI();
}

// 📋 GET CURRENT SCORE
function getCurrentScore() {
    if (isComputerMode) {
        return currentPlayer === 1 ? scores.human : scores.computer;
    } else {
        return currentPlayer === 1 ? scores.player1 : scores.player2;
    }
}

// 🖥️ UPDATE UI
function updateUI() {
    if (isComputerMode) {
        updateComputerUI();
    } else {
        updatePersonUI();
    }
}

function updatePersonUI() {
    document.getElementById('p1-score').textContent = scores.player1;
    document.getElementById('p2-score').textContent = scores.player2;
    document.getElementById('person-turn').textContent = `Player ${currentPlayer}'s Turn`;
    document.getElementById('person-status').textContent = `Player ${currentPlayer}: Choose 2 cards to flip`;
}

function updateComputerUI() {
    document.getElementById('human-score').textContent = scores.human;
    document.getElementById('ai-score').textContent = scores.computer;
    document.getElementById('computer-turn').textContent = currentPlayer === 1 ? 'Your Turn' : 'Computer Turn';

    if (currentPlayer === 1) {
        document.getElementById('computer-status').textContent = 'Your turn: Choose 2 cards to flip';
        document.getElementById('computer-status').classList.remove('computer-thinking');
    } else {
        document.getElementById('computer-status').textContent = '🤖 Computer is thinking...';
        document.getElementById('computer-status').classList.add('computer-thinking');
    }
}

// 📢 UPDATE STATUS MESSAGE
function updateStatus(message) {
    const statusEl = isComputerMode ?
        document.getElementById('computer-status') :
        document.getElementById('person-status');
    statusEl.textContent = message;
    statusEl.classList.remove('computer-thinking');
}

// 🤖 COMPUTER AI LOGIC
function computerTurn() {
    if (!isGameActive || !canFlipCards || currentPlayer !== 2) return;

    updateStatus('🤖 Computer is analyzing the board...');

    setTimeout(() => {
        // STRATEGY 1: Check if computer knows any complete pairs
        const knownPair = findKnownMatchingPair();
        if (knownPair) {
            computerFlipPair(knownPair.pos1, knownPair.pos2);
            return;
        }

        // STRATEGY 2: If computer remembers 1 card of a type, try to find its match
        const halfPair = findHalfKnownPair();
        if (halfPair) {
            computerFlipWithStrategy(halfPair.knownPos, halfPair.symbol);
            return;
        }

        // STRATEGY 3: Explore 2 unknown cards
        computerFlipRandom();

    }, 2000); // Computer "thinks" for 2 seconds
}

// 🧠 COMPUTER MEMORY FUNCTIONS
function findKnownMatchingPair() {
    const memoryEntries = Object.entries(computerMemory);

    for (let i = 0; i < memoryEntries.length; i++) {
        for (let j = i + 1; j < memoryEntries.length; j++) {
            const [pos1, symbol1] = memoryEntries[i];
            const [pos2, symbol2] = memoryEntries[j];

            if (symbol1 === symbol2 && symbol1 !== '🃏') {
                const card1 = document.querySelector(`[data-position="${pos1}"]`);
                const card2 = document.querySelector(`[data-position="${pos2}"]`);

                if (!card1.classList.contains('matched') && !card2.classList.contains('matched')) {
                    return { pos1: parseInt(pos1), pos2: parseInt(pos2) };
                }
            }
        }
    }
    return null;
}

function findHalfKnownPair() {
    for (let [position, symbol] of Object.entries(computerMemory)) {
        if (symbol !== '🃏') {
            const card = document.querySelector(`[data-position="${position}"]`);
            if (!card.classList.contains('matched')) {
                return { knownPos: parseInt(position), symbol: symbol };
            }
        }
    }
    return null;
}

// 🎯 COMPUTER CARD FLIPPING
function computerFlipPair(pos1, pos2) {
    const card1 = document.querySelector(`[data-position="${pos1}"]`);
    const card2 = document.querySelector(`[data-position="${pos2}"]`);

    updateStatus('🤖 Computer found a known pair!');

    setTimeout(() => {
        flipCard(card1, pos1);
        flippedCards.push({ element: card1, position: pos1, symbol: gameBoard[pos1] });
        cardsFlippedThisTurn = 1;
    }, 500);

    setTimeout(() => {
        flipCard(card2, pos2);
        flippedCards.push({ element: card2, position: pos2, symbol: gameBoard[pos2] });
        cardsFlippedThisTurn = 2;
        canFlipCards = false;
        setTimeout(checkMatch, 1000);
    }, 1000);
}

function computerFlipWithStrategy(knownPos, knownSymbol) {
    const availableCards = getAvailableCardPositions();
    const unknownCards = availableCards.filter(pos => !computerMemory.hasOwnProperty(pos));

    if (unknownCards.length === 0) {
        computerFlipRandom();
        return;
    }

    const card1 = document.querySelector(`[data-position="${knownPos}"]`);
    const randomPos = unknownCards[Math.floor(Math.random() * unknownCards.length)];
    const card2 = document.querySelector(`[data-position="${randomPos}"]`);

    updateStatus('🤖 Computer is looking for a match...');

    setTimeout(() => {
        flipCard(card1, knownPos);
        flippedCards.push({ element: card1, position: knownPos, symbol: gameBoard[knownPos] });
        cardsFlippedThisTurn = 1;
    }, 500);

    setTimeout(() => {
        flipCard(card2, randomPos);
        flippedCards.push({ element: card2, position: randomPos, symbol: gameBoard[randomPos] });

        // Remember this new card
        computerMemory[randomPos] = gameBoard[randomPos];

        cardsFlippedThisTurn = 2;
        canFlipCards = false;
        setTimeout(checkMatch, 1000);
    }, 1000);
}

function computerFlipRandom() {
    const availableCards = getAvailableCardPositions();

    if (availableCards.length < 2) {
        computerFlipAny();
        return;
    }

    const pos1 = availableCards[Math.floor(Math.random() * availableCards.length)];
    const remainingCards = availableCards.filter(p => p !== pos1);
    const pos2 = remainingCards[Math.floor(Math.random() * remainingCards.length)];

    const card1 = document.querySelector(`[data-position="${pos1}"]`);
    const card2 = document.querySelector(`[data-position="${pos2}"]`);

    updateStatus('🤖 Computer is exploring new cards...');

    setTimeout(() => {
        flipCard(card1, pos1);
        flippedCards.push({ element: card1, position: pos1, symbol: gameBoard[pos1] });
        computerMemory[pos1] = gameBoard[pos1]; // Remember this card
        cardsFlippedThisTurn = 1;
    }, 500);

    setTimeout(() => {
        flipCard(card2, pos2);
        flippedCards.push({ element: card2, position: pos2, symbol: gameBoard[pos2] });
        computerMemory[pos2] = gameBoard[pos2]; // Remember this card

        cardsFlippedThisTurn = 2;
        canFlipCards = false;
        setTimeout(checkMatch, 1000);
    }, 1000);
}

function computerFlipAny() {
    // Fallback: flip any 2 unmatched cards
    const allCards = document.querySelectorAll('.card:not(.matched)');
    if (allCards.length >= 2) {
        const card1 = allCards[0];
        const card2 = allCards[1];
        const pos1 = parseInt(card1.dataset.position);
        const pos2 = parseInt(card2.dataset.position);

        updateStatus('🤖 Computer making final moves...');

        setTimeout(() => {
            flipCard(card1, pos1);
            flippedCards.push({ element: card1, position: pos1, symbol: gameBoard[pos1] });
            cardsFlippedThisTurn = 1;
        }, 500);

        setTimeout(() => {
            flipCard(card2, pos2);
            flippedCards.push({ element: card2, position: pos2, symbol: gameBoard[pos2] });
            cardsFlippedThisTurn = 2;
            canFlipCards = false;
            setTimeout(checkMatch, 1000);
        }, 1000);
    }
}

// 🎯 HELPER FUNCTIONS
function getAvailableCardPositions() {
    const available = [];
    for (let i = 0; i < 15; i++) {
        const card = document.querySelector(`[data-position="${i}"]`);
        if (!card.classList.contains('matched') && !card.classList.contains('flipped')) {
            available.push(i);
        }
    }
    return available;
}

// 🏆 END GAME
function endGame() {
    isGameActive = false;
    canFlipCards = false;

    let winner;
    if (isComputerMode) {
        winner = scores.human >= 4 ? 'You Win! 🎉' : 'Computer Wins! 🤖';
    } else {
        winner = scores.player1 >= 4 ? 'Player 1 Wins! 🎉' : 'Player 2 Wins! 🎉';
    }

    updateStatus(`${winner}`);

    // Show restart option
    setTimeout(() => {
        const currentPage = isComputerMode ? 'computer-status' : 'person-status';
        document.getElementById(currentPage).innerHTML =
            `<div class="winner-announcement">${winner}</div>
                     <button class="btn" onclick="startGame('${gameMode}')" style="margin-top: 15px;">
                        🔄 Play Again
                     </button>`;
    }, 2000);
}

// Initialize the game
document.addEventListener('DOMContentLoaded', function () {
    console.log('🎮 Card Matching Game Loaded!');
});