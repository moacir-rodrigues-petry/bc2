import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/globals.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
