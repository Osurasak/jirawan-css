import logo from './logo.svg';
import './App.css';
import "./input.css";
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import LandingPages from './pages/LandingPages';
import DetailPages from './pages/DetailPages';

function App() {
  return (
    <div className="bg-gradient-to-b from-[#A9A9A9] to-[#B6B6B4] h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPages />}></Route>
        <Route path="/detail" element={<DetailPages />} />
      </Routes>
    </div>
  );
}

export default App;
