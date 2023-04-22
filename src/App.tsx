import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/login/LoginPage";
import { ProfilesList } from "./components/profilesList/ProfilesList";
import { ProtectedRoute } from "./components/protected-route/ProtectedRoute";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/all-profiles"
            element={<ProtectedRoute path="/allProfiles" element={<ProfilesList />}></ProtectedRoute>} />
          {/* <Route path="/all-profiles" element={<ProtectedRoute path="/all-profiles" element={<ProfilesList />} />} /> */}
        </Routes>
      </Router>
      {/* <Router>
        <Routes>
          <Route element={<ProtectedRoute />} >
            <Route path='/all-profiles' element={<ProfilesList />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App
