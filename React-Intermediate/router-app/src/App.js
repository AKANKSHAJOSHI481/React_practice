// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home.js";
import Support from "./Components/Support.js";
import About from "./Components/About.js";
import Labs from "./Components/Labs.js";
import Notfound from "./Components/Notfound.js";
import {Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/labs">Labs</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
