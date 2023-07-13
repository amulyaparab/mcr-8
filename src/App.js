import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { Event } from "./Pages/Event";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:eventId" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
