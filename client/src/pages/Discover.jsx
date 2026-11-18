import { useState, useEffect } from "react";
function Discover() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const API_KEY = import.meta.env.VITE_RAWG_API_KEY; // my api key from RAWG

  const fetchGames = async (query = "") => {
    setLoading(true);
    try {
      // so the ordering should let me find games easier
      let url = `https://api.rawg.io/api/games?key=${API_KEY}`;
      if (query) {
        // so this should let me only pull the names that match
        url += `&search=${encodeURIComponent(query)}`;
      }

      const res = await fetch(url);
      const data = await res.json();
      setGames(data.results || []);
    } catch (err) {
      console.log("ERR:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Discover Games</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchGames(searchQuery);
        }}
        className="input-group mb-5"
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>

      {loading ? (
        <div className="text-center text-white">Loading... please work...</div>
      ) : (
        <div className="row g-4">
          {games.map((game) => (
            <div className="col-md-4 col-lg-3" key={game.id}>
              <div className="card h-100 bg-dark text-light border-secondary">
                <img
                  src={game.background_image}
                  className="card-img-top"
                  alt={game.name}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fs-6 fw-bold">{game.name}</h5>
                  <button
                    className="mt-auto btn btn-outline-light btn-sm"
                    onClick={() => alert("added!")}
                  >
                    ❤️ Like
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Discover;
