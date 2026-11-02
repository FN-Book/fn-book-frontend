
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Footer() {
    const [email, setEmail] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        if (!email.trim()) return;

        console.log('Email cadastrado:', email);

        setEmail('');
    }

    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-brand">
                    <h2>FN Book</h2>
                    <p>
                        Análises, dados e checagens para
                        combater a desinformação.
                    </p>
                </div>

                <nav className="footer-column">
                    <h3>Navegação</h3>
                    <a href="/">Início</a>
                    <a href="/analises">Painel de análises</a>
                    <a href="/administrativo">Área administrativa</a>
                    <a href="/noticias">Base de notícias</a>
                </nav>

                <nav className="footer-column">
                    <h3>Institucional</h3>
                    <Link to="/about">Sobre nós</Link>
                    <a href="/metodologia">Metodologia</a>
                </nav>

                <div className="footer-newsletter">
                    <h3>Receba as análises da semana</h3>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="seu@email.com"
                            aria-label="Seu endereço de email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            required
                        />

                        <button type="submit">
                            Assinar
                        </button>
                    </form>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} FNBook ·
                    Projeto integrador
                </p>
            </div>
        </footer>
    );
}
