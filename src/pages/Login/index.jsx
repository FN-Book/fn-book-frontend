import React from 'react'
import { Input } from '../../components'
import './style.css'

export default function Login() {
    return (
        <div className="main-container-auth">
            <div className="image">
                <div className="image-tittle">
                    <h1>Fake News Book</h1>
                    <p>o seu <span>portal da verdade</span></p>
                </div>
            </div>
            <div className="main-container-content">
                <div className="logotype"><a href="/">FN Book</a></div>

                <div className="main-container-section">
                    <h1 style={{marginTop: 0}}>Login</h1>
                    <p className="bem-vindo">Bem vindo(a) de volta! Faça login para continuar</p>
                    <form className="formulario" method="POST" action="">
                        <label htmlFor="email">Email</label>
                        <Input
                            inputType="text"
                            inputId="email"
                            inputName="email"
                            inputPlaceholder="name@example.com"
                        />
                        <label htmlFor="senha">Senha</label>
                        <Input
                            inputType="password"
                            inputId="senha"
                            inputName="senha"
                            inputPlaceholder=""
                        />
                        <input type="submit" value="Entrar" className="buttonLogin" />
                    </form>
                    <p className="main-container-content-link">Não possui uma conta ainda? <a href="/register">Crie uma gratuitamente</a></p>
                </div>
            </div>
        </div>
    )
}
