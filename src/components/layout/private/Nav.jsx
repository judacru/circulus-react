import React, { useState } from 'react'
import avatar from '../../../assets/img/user.png'
import useAuth from '../../../hooks/useAuth'
import { Global } from '../../../helpers/Global'
import { NavLink } from 'react-router-dom'

export const Nav = ({ open, toggleMenu }) => {
  const { auth } = useAuth()

  return (
    <nav className={`navbar__container-lists ${open ? 'navbar__visible' : ''}`}>
      {open && (
        <button
          className="close-button"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <i className="fa-solid fa-x"></i>
        </button>
      )}

      <ul className="container-lists__menu-list">
        <li className="menu-list__item">
          <NavLink to="/social" className="menu-list__link">
            <i className="fa-solid fa-house"></i>
            <span className="menu-list__title">Inicio</span>
          </NavLink>
        </li>

        <li className="menu-list__item">
          <NavLink to="/social/feed" className="menu-list__link">
            <i className="fa-solid fa-list"></i>
            <span className="menu-list__title">Timeline</span>
          </NavLink>
        </li>

        <li className="menu-list__item">
          <NavLink to="/social/people" className="menu-list__link">
            <i className="fa-solid fa-user"></i>
            <span className="menu-list__title">Gente</span>
          </NavLink>
        </li>
        <li className="list-end__item">
          <NavLink to={'/social/profile/' + auth.id} className="list-end__link">
            <span className="list-end__name">{auth.nick}</span>
          </NavLink>
        </li>
        {!open && (
          <li className="list-end__item">
            <NavLink
              to={'/social/profile/' + auth.id}
              className="list-end__link-image"
            >
              {auth.image !== 'default.png' && (
                <img
                  src={Global.url + 'user/avatar/' + auth.image}
                  className="list-end__img"
                  alt="Imagen de perfil"
                />
              )}
              {auth.image === 'default.png' && (
                <img
                  src={avatar}
                  className="list-end__img"
                  alt="Imagen de perfil"
                />
              )}
            </NavLink>
          </li>
        )}
      </ul>

      <ul className="container-lists__list-end">
        <li className="list-end__item">
          <NavLink to="/social/config" href="#" className="list-end__link">
            <i className="fa-solid fa-gear"></i>
            <span className="list-end__name">Ajustes</span>
          </NavLink>
        </li>
        <li className="list-end__item">
          <NavLink to="/social/logout" className="list-end__link">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span className="list-end__name">Cerrar sesión</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
