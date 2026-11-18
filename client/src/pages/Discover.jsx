import { useState, useEffect } from "react"; // forgot to add this before 
function Discover() {
  const [games, setGames] = useState([]);

  // adding api key 
  const API_KEY = import.meta.env.VITE_RAWG_API_KEy;

  useEffect(() => {
    fetch('hettps://api.rawg.io/api/games?key=${KEY}'
    .then(res => res.json())
    .then(data => {
    setGames(data);
    });
  })
  
   return (
   <div>
    <h1>Discover Games</h1>
      {/* <div>{games.map(g => g.name)}</div> */}
      <p>
        Loading games....
      </p>
   </div>
   );
  }

export default Discover;
