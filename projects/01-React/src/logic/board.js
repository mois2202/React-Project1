import { WINNER_COMBOS } from '../components/constants.js'


export function checkWinner (boardToCheck) { 
    for (const combination of WINNER_COMBOS) {
      const [a, b, c] = combination;
      if (boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a];
      }
    }
    return null;
  }

  export function checkEndGame (boardToCheck) {
    return boardToCheck.every((cell) => cell !== null)
  } 