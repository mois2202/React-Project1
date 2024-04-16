import {winnerCombinations} from '..components/constants.js';

export const checkWinner = (board) => { 
    for (const combination of winnerCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  export const updateBoard = (index) => {
    if (board[index] !== null || winner !== null) 
    return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const checkEndGame = (board) => {
      return newBoard.every((cell) => cell !== null)
    }
