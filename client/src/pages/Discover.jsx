function Discover() {
  // trying to figure out how fetch works lol 
  const [games, setGames] = useState([
    { id: 1, name: "Test Game 1", released: "2026-01-01"}
    { id: 2, name: "GTA 5", released: "2013"}
  ]);

  return
    <div className="container py-5">
      <h1>Discover Games</h1>
      <ul>
        {games.map(g => (
         <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Discover;
