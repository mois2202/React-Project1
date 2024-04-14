/**
 * Checks if there is a winner on the board.
 * @param {Array} board - The current state of the board.
 * @returns {string|null} - The symbol of the winner ('X' or 'O') or null if there is no winner yet.
 */
import { useImperativeHandle, useState } from 'react'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O'
}

const Square = ({children, isSelected, updateBoard, index}) => {
  
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={isSelected !== false ? 'square is-selected' : 'square'}>
      {children}
    </div>
  )
}

const winnerCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
  [0, 4, 8], [2, 4, 6] // Diagonal
]


function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [winner, setWinner] = useState(null) //null is haven't winner yet

  const [turn, setTurn] = useState(TURNS.X)

  

  const checkWinner = (board) => { 
    for (const combination of winnerCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }


  const updateBoard = (index) => {
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

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

const resetGame = () => { 
  setBoard(Array(9).fill(null))
  setWinner(null)
  setTurn(TURNS.X)
}




  return (
    <main className='board'>
      <h1> La vieja </h1>
      <buttom onClick={resetGame}>Reiniciar</buttom>
      <section className='game'>
        {
        board.map((_, index) => {
          return (
            <Square 
            key={index} 
            index={index}
              updateBoard={updateBoard}>
                {board[index]}
            </Square>
            )
        }
        )
        }
      </section>





      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>

        <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
        </Square>

      </section>

      <section>
       {winner != null && (

      <section className='winner'>
          <div className='text'> 
            <h2>
              {winner === false ? 'Empate':'El Ganador es:'} 
            </h2> 

            <header className='win'> 
              {winner && <Square>{winner}</Square>}
            </header>

            <footer>
              <buttom onClick={resetGame}>Empezar de nuevo</buttom>
            </footer>

          </div>
      </section>
)} 


      </section>

    </main>
  )
}

export default App;
