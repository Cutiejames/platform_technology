const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    // Get the user's guess
    const userGuess = parseInt(document.getElementById('guessInput').value);

    // Check if the guess is correct, too high, or too low
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        setMessage('Please enter a valid number between 1 and 100.');
    } else {
        attempts++;
        if (userGuess === secretNumber) {
            setMessage(`Congratulations! You guessed the correct number ${secretNumber} in ${attempts} attempts.`);
        } else if (userGuess < secretNumber) {
            setMessage('Too low. Try again.');
        } else {
            setMessage('Too high. Try again.');
        }
    }
}
function checkGuess2(){
    const userGuess = parseInt(document.location.reload().value)
}
function setMessage(msg) {
    document.getElementById('message').textContent = msg;

}