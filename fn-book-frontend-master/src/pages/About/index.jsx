import React, { useState } from 'react'

import { FaWhatsapp } from "react-icons/fa"
import './style.css'




export default function About() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent('Assunto fixo do e-mail')
    const body = encodeURIComponent(message)
    const recipient = 'rochadesouzamanuela@gmail.com'

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
  }

  return (
    <div className="container-about">
      <div className="about-header">
        <h1>FN Book, seu portal de confiança para acessar informações verdadeiras de maneira rápida e objetiva</h1>
        <p>Nossa missão é trazer conteúdos claros, fundamentados em fatos e apresentados de forma acessível, garantindo que você se mantenha bem-informado sobre os temas que realmente importam.</p>
      </div>
      
      <div className="about-content">
        <div className="about-child">
          <h1>Quem Somos</h1>
          <p>Somos estudantes do curso de Análise e Desenvolvimento de Sistemas, movidos pela paixão por tecnologia e inovação. O FN Book nasceu como um projeto da disciplina Práticas em Sociedade Informática II, onde fomos desafiados a aplicar nossas habilidades para recriar uma solução que impactasse positivamente a sociedade.</p>
          <p>Nosso time é diverso e multidisciplinar, composto por desenvolvedores, designers e entusiastas de tecnologia, todos unidos pelo propósito de combater a desinformação e promover o acesso a informações verídicas. Cada integrante trouxe sua experiência e criatividade para construir o FN Book, com o compromisso de oferecer uma plataforma confiável, eficiente e voltada para o bem-estar de todos os usuários.</p>
        </div>
        <div className="about-child child-2">
          <h1>Fale conosco</h1>
          <p>Gostaria de falar conosco? nos contate no Whatsapp</p>
          <p><b><FaWhatsapp size={24} />(19) 9 8224-8477</b></p>
          <p>Ou deixe sua mensagem abaixo e aguarde um retorno</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Escreva sua mensagem aqui"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
      <footer></footer>
    </div>
  )
}