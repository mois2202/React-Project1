import { Square } from "./Square"
export function WinnerModal ({winner, resetGame}) {

if (winner === null) return null

    return (
    <section>
      <section className='winner'>
          <div className='text'> 
            <h2>
              {winner === false 
              ? 'Empate'
              :'El Ganador es:'} 
            </h2> 

            <header className='win'> 
              {winner && <Square>{winner}</Square>}
            </header>

            <footer>
              <buttom onClick={resetGame}>Empezar de nuevo</buttom>
            </footer>

          </div>
      </section>

      </section>
    ) 
}