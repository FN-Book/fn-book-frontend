import React from 'react'
import { Header, Carousel, Flag, MapWithClusters } from '../../components'
import './style.css'

import ImgMap from '../../assets/images/imagem-mapa.png'

// import MapWithClusters from '../../components'

export default function Home() {
  return (
    <div className="main-container">
      <Header />
      <div className="maps">
        <div className="map-container">
          <h1>Mapa de compartilhamento</h1>
          <p>Veja onde se concentra a maior incidência de Fake News</p>
          {/* <img src={ImgMap} alt="" /> */}
          <MapWithClusters/>
        </div>
        <div className="spotlight">
          <p style={{ marginBottom: '-30px' }}>Manchetes mais acessadas no momento</p>

          <div className="spotlight-content">
            <Flag truth={true} />
            <h1 className="mini-card-title">#1 - EUA impõem sanções contra agentes ligados a operações russas</h1>
            <p className="mini-card-text">Três entidades e 2 indivíduos serão sancionadas pelos EUA, segundo o secretário de Estado americano, Antony Blinken.</p>
          </div>

          <div className="spotlight-content">
            <Flag truth={false} />
            <h1 className="mini-card-title">#2 - EUA impõem sanções contra agentes ligados a operações russas</h1>
            <p className="mini-card-text">Três entidades e 2 indivíduos serão sancionadas pelos EUA, segundo o secretário de Estado americano, Antony Blinken.</p>
          </div>

          <div className="spotlight-content">
            <Flag truth={true} />
            <h1 className="mini-card-title">#3 - EUA impõem sanções contra agentes ligados a operações russas</h1>
            <p className="mini-card-text">Três entidades e 2 indivíduos serão sancionadas pelos EUA, segundo o secretário de Estado americano, Antony Blinken.</p>
          </div>
        </div>
      </div>
      <Carousel />
      <hr />
      <div className="faq">
        <div className="faq-content">
          <h1 className="title-faq">Perguntas <span>Frequentes</span></h1>
          <p className="subtitle-faq">Como cidadão, quero saber como contatar o chatbot pelo WhatsApp</p>
          <p className="faq-answer">Para contatar o nosso chatbot pelo WhatsApp, basta enviar uma mensagem
            para o número (XX) XXXXX-XXXX ou acessar o link whatsapp.com/send?phone=XXXXXXXXXXX. Nosso
            chatbot está disponível 24 horas por dia para responder suas dúvidas e fornecer informações
            atualizadas</p>
          <p className="subtitle-faq">Como cidadão, quero saber como colaborar na identificação de fake news</p>
          <p className="faq-answer">Você pode colaborar na identificação de fake news enviando notícias suspeitas
            ou links diretamente para o nosso chatbot ou acessando a seção "Denúncias de Fake News" no nosso site.
            A equipe analisará cada caso e dará retorno sobre a veracidade da informação.</p>
        </div>
      </div>
      <footer></footer>
    </div>
  )
}