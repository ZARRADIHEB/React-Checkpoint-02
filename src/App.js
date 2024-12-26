import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./components/PlayersList";

function App() {
  return (
    <div className="container py-4 bg-dark">
      <PlayersList />
    </div>
  );
}

export default App;
