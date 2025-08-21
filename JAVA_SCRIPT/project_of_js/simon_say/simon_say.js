let gameSequence = []; 
let userSequence = [];
let level = 0;
let highScore = localStorage.getItem('simonHighScore') || 0;
let gameStarted = false;
let isShowingSequence = false;

const colors = ['red', 'green', 'blue', 'yellow'];
const buttons = document.querySelectorAll('.btn');
const statusEl = document.getElementById('status');
const levelEl = document.getElementById('level');
const highScoreEl = document.getElementById('high-score');

// Display high score
highScoreEl.textContent = highScore;

// Start game on any key press
document.addEventListener('keydown', function () {
    if (!gameStarted) {
        startGame();
    }
});

// Button click handlers
buttons.forEach(button => {
    button.addEventListener('click', function () {
        if (gameStarted && !isShowingSequence) {
            const color = this.dataset.color;
            userSequence.push(color);
            flashButton(this);
            checkUserInput();
        }
    });
});

function startGame() {
    gameStarted = true;
    gameSequence = [];
    userSequence = [];
    level = 0;
    statusEl.textContent = "Watch the sequence!";
    nextLevel();
}

function nextLevel() {
    level++;
    levelEl.textContent = level;
    userSequence = [];

    // Add new color to sequence
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    gameSequence.push(randomColor);

    statusEl.textContent = `Level ${level} - Watch carefully!`;
    showSequence();
}

function showSequence() {
    isShowingSequence = true;
    let i = 0;

    const interval = setInterval(() => {
        const color = gameSequence[i];
        const button = document.querySelector(`[data-color="${color}"]`);

        flashButton(button);
        i++;

        if (i >= gameSequence.length) {
            clearInterval(interval);
            isShowingSequence = false;
            statusEl.textContent = "Now repeat the sequence!";
        }
    }, 800);
}

function flashButton(button) {
    button.classList.add('flash');
    setTimeout(() => {
        button.classList.remove('flash');
    }, 300);
}

function checkUserInput() {
    const currentIndex = userSequence.length - 1;
    const correctColor = gameSequence[currentIndex];
    const userColor = userSequence[currentIndex];

    if (userColor !== correctColor) {
        gameOver();
        return;
    }

    // Check if user completed the sequence
    if (userSequence.length === gameSequence.length) {
        if (level > highScore) {
            highScore = level;
            highScoreEl.textContent = highScore;
            localStorage.setItem('simonHighScore', highScore);
        }

        statusEl.textContent = "Correct! Get ready for the next level...";
        setTimeout(nextLevel, 1000);
    }
}

function gameOver() {
    gameStarted = false;
    isShowingSequence = false;
    statusEl.innerHTML = `<div class="game-over">Game Over! You reached level ${level}</div><div>Press any key to try again</div>`;

    // Flash all buttons red
    buttons.forEach(button => {
        button.style.backgroundColor = '#ff4444';
        setTimeout(() => {
            button.style.backgroundColor = '';
        }, 200);
    });
}