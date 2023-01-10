/*
// Collect input from a user
let userInput = prompt(`Enter a number`);

// Convert the input to a number
userInput = parseInt(userInput);



if (userInput) {
    // Use Math.random() and the user's number to generate a random number
    let randomNumber = Math.floor(Math.random() * userInput) + 1;

    // Create a message displaying the random number
    let message = `<h2>The random number you generated is ${randomNumber}</h2>`

    document.querySelector('main').innerHTML = message; 
} else {
    alert(`Please enter a number and not text`)
};
*/

// Second Code Challenge
// Collect input from a user
const userFirstInput = prompt(`Enter a number`);
const userSecondInput = prompt(`Enter a second number`);

// Convert the input to a number
firstNumber = parseInt(userFirstInput);
secondNumber = parseInt(userSecondInput);

if (firstNumber || secondNumber) {
    // Use Math.random() and the user's number to generate a random number
    let randomNumber = Math.floor(Math.random() * (secondNumber - firstNumber)) + firstNumber;

    // Create a message displaying the random number
    let message = `<h2>${randomNumber} is a number between ${firstNumber} and ${secondNumber}</h2>`

    document.querySelector('main').innerHTML = message; 
} else {
    alert(`Please enter two number and try again`)
};