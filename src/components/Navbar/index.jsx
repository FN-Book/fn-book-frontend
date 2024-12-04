import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './style.css'

export default function navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <>
            {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
            <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
                <div className="logotype">FN Book</div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`links ${isMenuOpen ? "open" : ""}`}>
                    <NavLink to={'/'} className={location.pathname === '/' ? 'active-page' : ''}>Início</NavLink>
                    {/* <NavLink to={'/about'} className={location.pathname === '/about' ? 'active-page' : ''}>Painel de análises</NavLink> */}
                    {/* <NavLink to={'/admin-area'} className={location.pathname === '/admin-area' ? 'active-page' : ''}>Área administrativa</NavLink> */}
                    <NavLink to={'/about'} className={location.pathname === '/about' ? 'active-page' : ''}>Sobre nós</NavLink>
                    <NavLink to={'/login'} className={location.pathname === '/login' ? 'active-page' : ''}><div className="btn-login">Entrar</div></NavLink>
                    <NavLink to={'/register'} className={location.pathname === '/register' ? 'active-page' : ''}><div className="btn-register">Cadastre-se</div></NavLink>
                </div>
            </div>
        </>
    )
}
