import { ProfilesList } from "./components/profilesList/ProfilesList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProfilesList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
