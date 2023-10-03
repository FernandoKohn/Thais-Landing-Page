import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Layout/Navbar';
import Home from "../src/components/Pages/Home"
import Numeros from "../src/components/Pages/Numeros"
import Contato from "../src/components/Pages/Contato"
import 'animate.css';
import { useState } from 'react';



function App() {

  var [page, setPage] = useState(true)

  var url = window.location.href
  console.log(url)
  return (
    <div className='container'>
      <Navbar/>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Números" element={<Numeros/> } />
        <Route path="/Contato" element={<Contato/>} />
        </Routes>
      </Router>
      <div className="pagination">
            <div>
              {(url = "http://localhost:3000/" && page) && (
                <a href="http://localhost:3000/N%C3%BAmeros">a</a>
              )}
            </div>
            <div>
                <i class='bx bx-left-arrow-alt'></i>
            </div>
        </div>
      
    </div>
  );
}

export default App;