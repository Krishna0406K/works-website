import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import Ideas from './components/ideas/ideas';
import Contact from './components/contacts/contact';
import './components/home/home.css';
import './components/about/about.css';
import './components/ideas/ideas.css';
import Navbar from './components/navbar/navbar';


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
