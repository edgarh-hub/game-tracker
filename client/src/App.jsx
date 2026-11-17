import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import Liked from "./pages/Liked";
import MyGames from "./pages/MyGames";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/my-games" element={<MyGames />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
    </Router>
  );
}

export default App;
