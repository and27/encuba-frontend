import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import BlogPage from "./pages/BlogPage.tsx";
import ShoppingPage from "./pages/ShoppingPage.tsx";
import Nav from "./components/Navigation/Nav.tsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/blog" replace />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/shopping" element={<ShoppingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
