import './App.css'


const Turns = {
  X: 'X',
  O: 'O'
}

const  board = Array(9).fill(null)

function App() {
return 

<main className='board'>
  <h1> La vieja </h1>
<Section className='game'>
{
  board.map((_, index) => {
    return (
      <div className='Cell' key={index}>
        <span className='cell__content'>
          {index}
        </span>
      </div>

    )
  })
}


</Section>
</main>
}

export default App
