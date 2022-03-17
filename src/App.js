import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchGifs from "./components/Search/Search";
import TrendingGifs from "./components/Trending/Trending";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchGifs />
      <TrendingGifs />
    </div>
  );
}

export default App;
