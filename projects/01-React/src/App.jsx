import { useImperativeHandle, useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import Square from './components/Square.jsx'
import {TURNS} from './components/constans.js'
import {checkWinner, updateBoard, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [winner, setWinner] = useState(null) //null is haven't winner yet

  const [turn, setTurn] = useState(TURNS.X)

  
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
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

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App;
