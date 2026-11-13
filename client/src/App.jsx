import { useState } from 'react'
import './App.css'

function App() {
  const [games, setGames] = useState();

useEffect(() +> {
    fetch('https://localhost:3001/games')
      .then(res => res.json()
      .then(data => setGames(data)); 
  }, []);

  return (
  <div>
      <h1>My games</h1>
      <url>
      {games.map(g => <li key={g.id}.{g.title})}</url>
  </div>>  );

export default App; 
