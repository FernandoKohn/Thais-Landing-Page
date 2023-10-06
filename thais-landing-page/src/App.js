import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar';
import Home from "../src/components/Pages/Home"
import Numeros from "../src/components/Pages/Numeros"
import Contato from "../src/components/Pages/Contato"
import 'animate.css';
import Pagination from './components/Layout/Pagination';



function App() {

  return (
    <div className='container'>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Números" element={<Numeros />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </Router>
      <Pagination/>
    </div>
  );
}

export default App