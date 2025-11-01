// Define possible dice colors
const diceColors = ['red', 'green', 'blue', 'yellow'];

// Function to change the color of a dice randomly
function changeDiceColor(diceId) {
    const dice = document.getElementById(diceId);
    const previouslygeneratedcolor = diceColors[Math.floor(Math.random() * diceColors.length)];
    dice.style.backgroundColor = previouslygeneratedcolor;
}
// Function to generate and display next dice colors
function generateNextColors() {
    const nextDice1 = document.getElementById('nextDice1');
    const nextDice2 = document.getElementById('nextDice2');
    const nextDice3 = document.getElementById('nextDice3');

    nextDice1.style.backgroundColor = diceColors[Math.floor(Math.random() * diceColors.length)];
    nextDice2.style.backgroundColor = diceColors[Math.floor(Math.random() * diceColors.length)];
    nextDice3.style.backgroundColor = diceColors[Math.floor(Math.random() * diceColors.length)];
}

// Initial display of next dice colors
generateNextColors();

// Event listener for the "Roll Again" button
document.getElementById('rollButton').addEventListener('click', function() {
    // Change the color of each dice
    changeDiceColor('dice1');
    changeDiceColor('dice2');
    changeDiceColor('dice3');

    // Generate and display next dice colors
    generateNextColors();
});
