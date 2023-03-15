import "./App.css";
import Movies from "./components/movies";
import Navigation from "./components/navigation";
function App() {
  const style = {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    display: "flex",
  };
  return (
    <main className="component" style={style}>
      <Navigation />
      <Movies />
    </main>
  );
}

export default App;
