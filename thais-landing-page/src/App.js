import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar';
import Home from "../src/components/Pages/Home"

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
