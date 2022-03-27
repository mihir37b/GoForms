import Hero from "./components.js/Hero";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components.js/Dashboard";
import Navbar from "./components.js/Navbar";
import Form from "./components.js/Form";
import About from "./components.js/About";
import Settings from "./components.js/Settings";
import Error from "./components.js/ErrorPage";
import LogOut from "./components.js/LogOut";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/forms" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
