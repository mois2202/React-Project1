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

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }
  return (
    <main className='board'>
      <h1> La vieja </h1>
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
    </main>
  )
}

export default App

