// Selecting elements

const p1button = document.querySelector('.p1-button'),
    p2button = document.querySelector('.p2-button'),
    resetButton = document.querySelector('.reset-button'),
    p1Display = document.querySelector('.p1-display'),
    p2Display = document.querySelector('.p2-display'),
    select = document.querySelector('.target');

// The score section

let p1Score = 0,
    p2Score = 0,
    winningScore = 0,
    isGameOver = false;

// player one Logic

p1button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score++;
        console.log(select);
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.textContent = p1Score;
    }
});

// player two Logic

p2button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.textContent = p2Score;
    }
});

// choosing the the Winning number logic
// here the arrow function syntax is not used here cause of the keyword

select.addEventListener('change', function () {
    winningScore = +this.value;
    reset();
});
// reseting logic

resetButton.addEventListener('click', reset);

function reset() {
    p1Score = p2Score = 0;
    p1Display.textContent = p2Display.textContent = p1Score;
    isGameOver = false;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}
