import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { Footer } from './Footer';

export const Navbar = () => {
  return (
    <div className='App'>
      <div className='navigation'>
          <header>
              <h2 className='titulo-nav'>PORTAFOLIO</h2> 
              <nav className="nav"> 
                  <NavLink className='span-nav' to='/DeployedPage/about' >About</NavLink>
                  <NavLink className='span-nav' to='/DeployedPage/piano' >Piano</NavLink>
                  <NavLink className='span-nav' to='/DeployedPage/spotify' >Spotify</NavLink>
                  <NavLink className='span-nav' to='/DeployedPage/todo' >Todo App</NavLink>
                  <NavLink className='span-nav' to='/DeployedPage/calculadora' >Calculadora</NavLink>
              </nav>
          </header>
      </div>
    </div>
  )
}
