import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar';
import Home from "../src/components/Pages/Home"
import Logo from "../src/components/Layout/Logo"
import 'animate.css';
function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
