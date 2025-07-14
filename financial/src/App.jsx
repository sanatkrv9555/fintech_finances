import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TopicDetail from "./pages/TopicDetail";
import Emi from "./pages/Emi";
import Investments from "./pages/Investments"; 
import Footer from "./components/Footer";
import QuizPage from "./pages/QuizPage";
import About from "./pages/About"; // ✅ adjust path if in components/
import StockPredictor from "./pages/StockPredictor"
import Pyt from "./components/Pyt"; // ✅ adjust path if in components/
function App() {
  return (
    <>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/emi" element={<Emi />} />

        <Route path="/topic/:id" element={<TopicDetail />} />
          <Route path="/investments" element={<Investments />} />
         <Route path="/quiz" element={<QuizPage />} />
         <Route path="/about" element={<About />} />
         <Route path="/stock-predictor" element={<StockPredictor />} />



      </Routes>
      <Footer />
    </>
  );
}

export default App;
