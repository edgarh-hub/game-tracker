import { useState, useEffect } from "react";
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

  const addGame = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:3001/api/games", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, genre, status }),
      });

      setTitle("");
      setGenre("");
      setStatus("");

      const res = await fetch("http://localhost:3001/api/games");
      const data = await res.json();
      setGames(data);
    } catch (err) {
      console.error(err);
    }
  };
  // added the correct format for the div. also added some padding
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Game Tracker & wishlist</h1>
      <div className="card shadow mb-4">
        <h3 className="card-title mb-3">Add a new game here</h3>
        <form onSubmit={addGame}>
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Game Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-1 d-grid">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>

      <h2 className="mb-3">My Games</h2>
      <div className="list-group">
        {games.map((game) => (
          <div
            key={game.id}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          >
            <div>
              <h5 className="mb-1">{game.title}</h5>
              <p className="mb-1 text-muted">Genre: {game.genre || "N/A"}</p>
            </div>
            <span className="badge bg-secondary rounded-pill">
              {game.status || "Wishlist"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
