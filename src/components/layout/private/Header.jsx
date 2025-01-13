import React, { useState } from 'react'
import { Nav } from './Nav'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="layout__navbar">
      <div className="navbar__header">
        <Link to="/social" className="navbar__title">
          CIRCULUS
        </Link>
      </div>

      <button
        className="hamburger-button"
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <Nav open={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  )
}
