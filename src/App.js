import Hero from "./components.js/Hero";
import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Login />
        <Hero />
      </div>
    </Router>
  );
}

export default App;
