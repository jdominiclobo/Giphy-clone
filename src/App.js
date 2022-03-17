import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchGifs from "./components/Search/Search";
import TrendingGifs from "./components/Trending/Trending";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<TrendingGifs />} />
        <Route path="/search" element={<SearchGifs />} />
      </Routes>
    </div>
  );
}

export default App;
