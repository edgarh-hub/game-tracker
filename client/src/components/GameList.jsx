function GameList({ games, clearDatabase }) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>My Games</h2>
        <button
          onClick={clearDatabase}
          className="btn btn-outline-danger btn-sm"
        >
          Clear All Games
        </button>
      </div>

      <div className="list-group">
        {games.length === 0 ? (
          <p className="text-muted">No games tracked yet.</p>
        ) : (
          games.map((game) => (
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
          ))
        )}
      </div>
    </div>
  );
}

export default GameList;
