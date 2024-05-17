import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import './App.css'
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';

function App() {
  return (
      <Router>
          <div className="App">
              <Header />
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>} />
                  <Route path="/contact" element={<Contact/>} />
                  <Route path="/services" element={<Services/>} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;