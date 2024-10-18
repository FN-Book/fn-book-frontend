import React from 'react'
import { Header, Carousel } from '../../components'
import './style.css'

export default function Home() {
  return (
    <div className="main-container">
      <Header />
      <div className="maps"></div>
      {/* <div className="carousel"></div> */}
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