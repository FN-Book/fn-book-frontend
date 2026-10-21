import React from 'react'
import { Input } from '../../components'
import './style.css'

export default function Register() {
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
          <h1>Cadastro</h1>
          <p className="bem-vindo">Bem vindo(a)! É um prazer ter você conosco</p>
          <form className="formulario" method="POST" action="">
            <label htmlFor="nome">Nome completo</label>
            <Input
              inputType="text"
              inputId="nome"
              inputName="nome"
              inputPlaceholder="Mario dos Santos"
            />
            <label htmlFor="email">Email</label>
            <Input
              inputType="text"
              inputId="email"
              inputName="email"
              inputPlaceholder="name@example.com"
            />
            <div className="container-data-foto">
              <div className="input-group">
                <label htmlFor="data-nasc">Data de nascimento</label>
                <Input
                  inputType="date"
                  inputId="data-nasc"
                  inputName="data-nasc"
                  inputPlaceholder=""
                />
              </div>
              <div className="input-group">
                <label htmlFor="foto-perfil">Foto de perfil</label>
                <Input
                  inputType="file"
                  inputId="foto-perfil"
                  inputName="foto-perfil"
                  inputPlaceholder=""
                />
              </div>
            </div>
            <label htmlFor="senha">Senha</label>
            <Input
              inputType="password"
              inputId="senha"
              inputName="senha"
              inputPlaceholder=""
            />
            <input type="submit" value="Entrar" className="buttonLogin" />
          </form>
          <p className="main-container-content-link">Já possui uma conta? <a href="/login">Faça login aqui</a></p>
        </div>
      </div>
    </div>
  )
}
