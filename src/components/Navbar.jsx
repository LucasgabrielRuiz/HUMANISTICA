import React from 'react';
import { motion } from 'framer-motion';
import { Cross, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className="site-navbar">
      <div className="container navbar-container">
        <a href="#hero" className="nav-brand">
          <div className="brand-icon">
            <Cross size={20} />
          </div>
          <span>Gaudete et Exsultate</span>
        </a>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#notas" className="nav-link">
                Las 5 Notas
              </a>
            </li>
            <li>
              <a href="#quiz" className="nav-link">
                Reflexión & Quiz
              </a>
            </li>
            <li>
              <a href="#quiz" className="btn-sacred-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.78rem' }}>
                Iniciar Quiz
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
