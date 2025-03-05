/* ------------------------------ TASK 5 -----------------------------------
Parašykite TS funkciją, kuri atlieka žirklės/popierius/akmuo žaidimo patikrinimą ir grąžina atsakymą.
Funkcija priima du tekstus ir grąžina tekstą.

Pvz.:
  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"
-------------------------------------------------------------------------- */

// Assigning types to 'p1_text' and 'p2_text' as strings, that are either 'rock', 'paper' or 'scissors'
const rockPaperScissors = (p1_text: 'rock' | 'paper' | 'scissors', p2_text: 'rock' | 'paper' | 'scissors'): string => {
  // Conditions to check who won the game, or if the game ended in a draw
  if(p1_text === p2_text){
    // Outputs a string 'Draw!' in case both inputs are the same
    return 'Draw!';
  } else if((p1_text === "rock" && p2_text === "scissors") ||
            (p1_text === "paper" && p2_text === "rock") ||
            (p1_text === "scissors" && p2_text === "paper")
  ){
    // Checks for player one win cases and outputs that player one won, in case the condition is fulfilled
    return 'Player 1 won!';
  } else {
    // Covers player two win cases and outputs that player two won
    return 'Player 2 won!';
  }
}
// console.log(rockPaperScissors("scissors", "paper"));
// console.log(rockPaperScissors("scissors", "rock"));
// console.log(rockPaperScissors("paper", "paper"));