import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import SocialMedia from "./pages/SocialMedia";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/social" element={<SocialMedia />} />
      </Routes>
    </div>
  );
}

export default App;
