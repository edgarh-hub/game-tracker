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
                className="form-controll"
                placeholder="Game Title"
                value="{title}"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-controll"
                placeholder="Genre"
                value="{Genre}"
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-controll"
                placeholder="Status"
                value="{Status}"
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-1 d-grid">
            <button type="submit" className="primary-button">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
