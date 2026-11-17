function GameForm({
  title,
  setTitle,
  genre,
  setGenre,
  status,
  setStatus,
  addGame,
}) {
  return (
    <div className="card shadow mb-4">
      <div className="card-body p-4">
        <h3 className="card-title mb-3">Add a new game here</h3>
        <form onSubmit={addGame}>
          <div className="row g-3 align-items-center">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Game Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <select
                className="form-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Select Status</option>
                <option value="Not Started">Not Started</option>
                <option value="Started">Started</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="col-md-2 d-grid">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GameForm;
