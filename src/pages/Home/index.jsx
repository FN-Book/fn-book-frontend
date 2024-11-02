import React from 'react'
import { Header, Carousel, Flag } from '../../components'
import './style.css'

import ImgMap from '../../assets/images/imagem-mapa.png'

export default function Home() {
  return (
    <div className="main-container">
      <Header />
      <div className="maps">
        <div className="map-container">
          <h1>Mapa de compartilhamento</h1>
          <p>Veja onde se concentra a maior incidência de Fake News</p>
          <img src={ImgMap} alt="" />
        </div>
        <div className="spotlight">
          <p style={{marginBottom: '-30px'}}>Manchetes mais acessadas no momento</p>

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
          <p className="faq-answer">Lorem ipsum dolor sit amet. Hic aliquid corrupti qui exercitationem omnis sit quia deserunt eos blanditiis voluptatem ut quisquam quia! Et nesciunt debitis non ratione atque est omnis quisquam non ipsam ipsum. Nam autem totam eum</p>
          <p className="subtitle-faq">Como cidadão, quero saber como contatar o chatbot pelo WhatsApp</p>
          <p className="faq-answer">Lorem ipsum dolor sit amet. Hic aliquid corrupti qui exercitationem omnis sit quia deserunt eos blanditiis voluptatem ut quisquam quia! Et nesciunt debitis non ratione atque est omnis quisquam non ipsam ipsum. Nam autem totam eum</p>
        </div>
      </div>
      <footer></footer>
    </div>
  )
}