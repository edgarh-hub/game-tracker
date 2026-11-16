import { useState } from "react";
import "./App.css";

function App() {
  const [games, setGames] = useState([]);
  const [title, setTitle] = useState(""); // added the missing array
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/games") // added the missing /api/ lol
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.log(err));
  }, []);

  const addGame = (e) => {
    e.preventDefault();

    try {
      await fetch('http://localhost:3001/api/games', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ title, genre, status }),
      });

      setTitle('');
      setGenre(''); 
      setStatus('');

      const res = await fetch('http://localhost:3001/api/games');
      const data = await res.json();
      setGames(data);
    } catch (err) {
      console.error(err);
    }
  }
  // added the correct format for the div. also added some padding
  return (
    <div style={{ padding: "20px" }}>
      <h1>Game Tracker</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.title} - {game.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
