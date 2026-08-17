import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="nav-links-left">
          <Link to="/about" onClick={() => setIsOpen(false)}>About Me</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        </div>

        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          <img src="/logo.png" alt="Logo" />
        </Link>

        <div className="nav-links-right">
          <Link to="/diary" onClick={() => setIsOpen(false)}>Digital Diary</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <button
        type = "button" 
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`nav-links-mobile ${isOpen ? 'open' : ''}`}>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Me</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/diary" onClick={() => setIsOpen(false)}>Digital Diary</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;