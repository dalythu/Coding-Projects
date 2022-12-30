/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswers = 0;

// 2. Store the rank of a player
let playerRank = '';

// 3. Select the <main> HTML element

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
let questionOne = prompt('What is the capital of Georgia?').toUpperCase();
  console.log(questionOne);
let questionTwo = prompt('What month is it?').toUpperCase();
  console.log(questionTwo);
let questionThree = prompt('Is the sun out?').toUpperCase();
  console.log(questionThree);
let questionFour = prompt('What color is your xBox?').toUpperCase();
  console.log(questionFour);
let questionFive = prompt('Who made the laptop you are using right now?').toUpperCase();
  console.log(questionFive);

if ( questionOne === 'ATLANTA' ) {
  correctAnswers += 1;
  console.log(correctAnswers);
}; 
if ( questionTwo === 'DECEMBER' ) {
  correctAnswers += 1;
  console.log(correctAnswers);
}; 
if ( questionThree === 'NO' ) {
  correctAnswers += 1;
  console.log(correctAnswers);
}; 
if ( questionFour === 'BLACK' ) {
  correctAnswers += 1
  console.log(correctAnswers);
}; 
if ( questionFive === 'APPLE' ) {
  correctAnswers += 1
  console.log(correctAnswers);
}; 


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if ( correctAnswers > 4 ) {
  playerRank = 'Gold';
} else if ( correctAnswers > 2 ) {
  playerRank = 'Silver';
} else if ( correctAnswers > 0 ) {
  playerRank = 'Bronze';
} else {
  playerRank = 'No crown';
}

// 6. Output results to the <main> element
document.querySelector('main').innerHTML = `<p>Your final score is ${correctAnswers} and your rank is ${playerRank}<p>`

