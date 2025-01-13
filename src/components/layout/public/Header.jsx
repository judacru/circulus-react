import React from 'react'
import { Nav } from './Nav'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="layout__navbar_private">
      <div className="navbar__header">
        <Link to="/" className="navbar__title">
          CIRCULUS
        </Link>
      </div>

      <Nav />
    </header>
  )
}
