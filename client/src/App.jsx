import { useState } from 'react'
import './App.css'

function App() {
  const [games, setGames] = useState([]); // added the missing array
  useEffect(() => {
    fetch('http://localhost:3001/api/games') // added the missing /api/ lol
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.log(err));
  }, []);

// added the correct format for the div. also added some padding
  return (
    <div style={{padding: '20px'}}>
      <h1>Game Tracker</h1>
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.title} - {game.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


