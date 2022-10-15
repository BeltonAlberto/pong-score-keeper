// Creating Players

const p1 = {
    score: 0,
    button: document.querySelector('#p1-button'),
    display: document.querySelector('.p1-display'),
};

const p2 = {
    score: 0,
    button: document.querySelector('#p2-button'),
    display: document.querySelector('.p2-display'),
};

const resetButton = document.querySelector('#reset-button'),
    select = document.querySelector('.target-num');

let winningScore = 0,
    isGameOver = false;

// events section

p1.button.addEventListener('click', () => {
    updateScore(p1, p2);
});

p2.button.addEventListener('click', () => {
    updateScore(p2, p1);
});

// function keyword allows the 'this' keyword bellow

select.addEventListener('change', function () {
    winningScore = +this.value;
    reset();
});

resetButton.addEventListener('click', reset);

// function keyword will be hoisted

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        console.log(select);
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
        }
        player.display.textContent = player.score;
    }
}

function reset() {
    isGameOver = false;
    for (let player of [p1, p2]) {
        player.score = 0;
        player.display.textContent = player.score;
        player.display.classList.remove('has-text-success', 'has-text-danger');
    }
}
