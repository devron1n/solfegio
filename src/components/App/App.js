import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Visualize from "../Visualize/Visualize";

import "./App.less";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App__menu">
          <Link to="/visualize">Визуализация на грифе</Link>
        </div>

        <Routes>
          <Route path="/visualize" element={<Visualize />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
