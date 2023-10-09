import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar';
import Home from "../src/components/Pages/Home"
import HomeM from "../src/components/Pages/HomeM"
import Numeros from "../src/components/Pages/Numeros"
import Contato from "../src/components/Pages/Contato"
import 'animate.css';
import Pagination from './components/Layout/Pagination';
import Navbar_m from './components/Layout/Navbar_m';
import Pagination_m from './components/Layout/Pagination_m';



function App() {

  return (
    <div className="all">
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
      {/* <div className='container_mobile'>
        <Navbar_m />
        <Pagination_m/>
        <Router>
          <Routes>
            <Route path="/" element={<HomeM />} />
            <Route path="/Números" element={<Numeros />} />
            <Route path="/Contato" element={<Contato />} />
          </Routes>
        </Router>
      </div> */}
    </div>
  );
}

export default App