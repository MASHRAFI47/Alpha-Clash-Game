function hideElementById (elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById (elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function getRandomAlphabet () {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    // const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetArray = alphabets.split('');
    
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const randomAlphabet = alphabetArray[index];

    return randomAlphabet;
}

function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}

function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}