// Rock Paper Scissors

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// take in two players. will only be two.
// the result will tell which player has won
// 





const rps = (p1, p2) => {
    if (p1 === p2) {
      return 'Draw!';
    }
      if (p1 === 'scissors' && p2 === 'rock') {
          return 'Player 2 won!';
      }else if(p1 === 'paper' && p2 === 'scissors') {
          return'Player 2 won!';
      }else if(p1 === 'rock'  && p2 === 'paper'){
          return'Player 2 won!';
      }else {
          return 'Player 1 won!';
      }
  };