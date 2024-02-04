import PlayerInfo from './components/PlayerInfo'
import GameBoard from './components/GameBoard';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo initialName="Player 1" symbol="X" />
          <PlayerInfo initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App