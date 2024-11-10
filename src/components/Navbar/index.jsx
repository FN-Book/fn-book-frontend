import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './style.css'

export default function navbar() {
    const location = useLocation()

    return (
        <div className="navbar">
            <div className="logotype">FN Book</div>
            <div className="links">
                <NavLink to={'/'} className={location.pathname === '/' ? 'active-page' : ''}>Início</NavLink>
                <NavLink to={'/login'} className={location.pathname === '/login' ? 'active-page' : ''}>Login</NavLink>
                <NavLink to={'/register'} className={location.pathname === '/register' ? 'active-page' : ''}>Cadastro</NavLink>
                {/* <NavLink to={'/about'} className={location.pathname === '/about' ? 'active-page' : ''}>Painel de análises</NavLink> */}
                <NavLink to={'/admin-area'} className={location.pathname === '/admin-area' ? 'active-page' : ''}>Área administrativa</NavLink>
                {/* <NavLink to={'/about'} className={location.pathname === '/about' ? 'active-page' : ''}>Base de notícias</NavLink> */}
                <NavLink to={'/about'} className={location.pathname === '/about' ? 'active-page' : ''}>Sobre nós</NavLink>
            </div>
        </div>
    )
}
