document.addEventListener('DOMContentLoaded', () => {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Handle form submission
    const form = document.getElementById('guessForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        const userGuess = parseInt(document.getElementById('userGuess').value, 10);
        const result = document.getElementById('result');

        if (isNaN(userGuess)) {
            result.textContent = 'Please enter a valid number.';
        } else if (userGuess < randomNumber) {
            result.textContent = 'The number you guessed is less than the random number.';
        } else if (userGuess > randomNumber) {
            result.textContent = 'The number you guessed is greater than the random number.';
        } else {
            result.textContent = 'Congratulations! You guessed the number correctly!';
        }
    });
});
