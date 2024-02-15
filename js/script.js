function continueGame() {
    const alphabet = getRandomAlphabet();
    const randomAlphabet = document.getElementById('random-alpha');
    randomAlphabet.innerText = alphabet;

    setBackgroundColor(alphabet);
}

function gameOver() {
    hideElementById('play');
    showElementById('score');

    const lastScore = document.getElementById('last-score');
    const currentScore = document.getElementById('current-score');
    lastScore.innerText = currentScore.innerText;

    const randomAlphabet = document.getElementById('random-alpha');
    const currentAlphabet = randomAlphabet.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    removeBackgroundColor(expectedAlphabet);
}

function play() {
    hideElementById('intro');
    hideElementById('score');
    showElementById('play');

    const currentLife = document.getElementById('current-life');
    currentLife.innerText = 5;

    const currentScore = document.getElementById('current-score');
    currentScore.innerText = 0;

    continueGame()
}

function handleKeyboardPress(event) {
    const pressedKey = event.key;
    console.log(pressedKey)
    //if escape pressed
    if(pressedKey === 'Escape') {
        gameOver();
    }
    const randomAlphabet = document.getElementById('random-alpha');
    const currentAlphabet = randomAlphabet.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (pressedKey === expectedAlphabet) {
        console.log("You won one point");
        //update score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        //increase score
        const newScore = currentScore + 1;
        //set score
        currentScoreElement.innerText = newScore
        //start new round
        continueGame();
        removeBackgroundColor(expectedAlphabet)
    }
    else {
        console.log("You lost one point")
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLifeScore = parseInt(currentLifeText);
        const newScore = currentLifeScore - 1;

        currentLifeElement.innerText = newScore;

        if (newScore === 0) {
            gameOver()
        }
    }
}
document.addEventListener('keyup', handleKeyboardPress);