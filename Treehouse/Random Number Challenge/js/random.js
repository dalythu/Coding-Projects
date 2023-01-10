// Collect input from a user
let userInput = prompt(`Enter a number`);

// Convert the input to a number
userInput = parseInt(userInput);

// Use Math.random() and the user's number to generate a random number
let randomNumber = Math.floor(Math.random(userInput) * 6) + 1;

// Create a message displaying the random number
let message = `<h2>The random number you generated is ${randomNumber}</h2>`

document.querySelector('main').innerHTML = message; 