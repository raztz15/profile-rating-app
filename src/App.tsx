import { ProfilesList } from "./components/profilesList/ProfilesList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router";
import { LoginPage } from "./components/login/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/all-profiles" element={<ProfilesList />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
