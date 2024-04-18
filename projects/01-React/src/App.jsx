import { useImperativeHandle, useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import Square from './components/Square.jsx'
import {checkWinner, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'



function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [winner, setWinner] = useState(null) //null is haven't winner yet

  const [turn, setTurn] = useState(TURNS.X)


const TURNS = {
    X: 'X',
    O: 'O'
  }
  
  
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }

    const updateBoard = (index) => {
      if (board[index] !== null || winner !== null) 
      return
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
  
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
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
