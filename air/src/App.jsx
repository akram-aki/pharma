import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { User } from "./User";
import Layout from "./Layout";
import IndexPage from "./assets/IndexPage";
import ProfilePage from "./assets/ProfilePage";
import IndexElements from "./assets/IndexElements";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <User>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/index" element={<IndexPage />} />
            <Route path="/index/:action?" element={<IndexElements />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/account/:subpage?" element={<ProfilePage />} />
            <Route path="/account/:subpage/:action" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Router>
    </User>
  );
}

export default App;
