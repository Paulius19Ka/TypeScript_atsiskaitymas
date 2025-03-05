"use strict";
const rockPaperScissors = (p1_text, p2_text) => {
    if (p1_text === p2_text) {
        return 'Draw!';
    }
    else if ((p1_text === "rock" && p2_text === "scissors") ||
        (p1_text === "paper" && p2_text === "rock") ||
        (p1_text === "scissors" && p2_text === "paper")) {
        return 'Player 1 won!';
    }
    else {
        return 'Player 2 won!';
    }
};
