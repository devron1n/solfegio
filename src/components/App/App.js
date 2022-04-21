import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Visualize from "../Visualize/Visualize";
import Selection from "../Selection/Selection";

import "./App.less";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App__menu">
          <Link
            to="/visualize"
            className="App__menu-item"
            style={{ backgroundColor: "#10b68c" }}
          >
            V
          </Link>
          <Link
            to="/selection"
            className="App__menu-item"
            style={{ backgroundColor: "#6c1ab7" }}
          >
            S
          </Link>
        </div>

        <div className="App__content">
          <Routes>
            <Route path="/visualize" element={<Visualize />} />
            <Route path="/selection" element={<Selection />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
