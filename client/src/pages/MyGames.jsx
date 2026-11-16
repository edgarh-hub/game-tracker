import { useState, useEffect } from "react";
import GameForm from "../components/GameForm";
import GameList from "../components/GameList";

function MyGames() {
  const [games, setGames] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/games")
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

  const clearDatabase = async () => {
    if (!window.confirm("Are you sure you want to clear all games?")) return;

    try {
      await fetch("http://localhost:3001/api/games", {
        method: "DELETE",
      });
      setGames([]);
    } catch (err) {
      console.error("Error clearing database:", err);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Game Tracker & wishlist</h1>
      <GameForm
        title={title}
        setTitle={setTitle}
        genre={genre}
        setGenre={setGenre}
        status={status}
        setStatus={setStatus}
        addGame={addGame}
      />
      <GameList games={games} clearDatabase={clearDatabase} />
    </div>
  );
}

export default MyGames;
