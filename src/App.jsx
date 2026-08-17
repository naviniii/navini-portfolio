import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import DigitalDiary from './pages/DigitalDiary';

function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/projects" element = {<Projects />} />
        <Route path = "/about" element = {<AboutMe />} />
        <Route path = "/contact" element = {<Contact />} />
        <Route path = "/diary" element = {<DigitalDiary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;