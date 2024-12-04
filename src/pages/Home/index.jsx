import React, {useState} from 'react'
import { Header, Carousel, Flag, MapWithClusters } from '../../components'
import ModalViewAllNews from '../../components/ModalViewAllNews'
import { news as data } from '../../mock/news'
import './style.css'

export default function Home() {
  const newsData = [...data].sort((a, b) => b.views - a.views)
  const news = newsData.slice(0, 3)

  const truncateText = (text, maxChars) => {
    return text.length > maxChars ? text.substring(0, maxChars) + "..." : text
  }

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCardData, setSelectedCardData] = useState(null)

  const viewAllInformations = (cardData, index) => {
    setSelectedCardData(cardData, index)
    setModalOpen(true)
  }

  return (
    <div className="main-container">
      <Header />
      <div className="maps">
        <div className="map-container">
          <h1>Mapa de compartilhamento</h1>
          <p>Veja onde se concentra a maior incidência de Fake News</p>
          <MapWithClusters />
        </div>
        <div className="spotlight">
          <p style={{ marginBottom: '-30px' }}>Manchetes mais acessadas no momento</p>

          {news.map((item, index) => (
            <div className="spotlight-content" onClick={() => viewAllInformations(item, index)} key={index}>
              <Flag truth={item.flag} />
              <h1 className="mini-card-title">{`#${index + 1} - ${item.title}`}</h1>
              <p className="mini-card-text">{truncateText(item.text, 130)}</p>
            </div>
          ))}
        </div>
      </div>
      <Carousel />
      <hr />
      <div className="faq">
        <div className="faq-content">
          <h1 className="title-faq">Perguntas <span>Frequentes</span></h1>
          <p className="subtitle-faq">Como cidadão, quero saber como contatar o chatbot pelo Telegram</p>
          <p className="faq-answer">Para contatar o nosso chatbot pelo Telegram, basta enviar uma mensagem
            para o bot, que pode ser acessado pelo <strong><a href="https://t.me/fake_news_analyzer_ifsp_hto_bot">clicando aqui</a></strong>. Nosso
            chatbot está disponível 24 horas por dia para responder suas dúvidas e fornecer informações
            atualizadas</p>
          <p className="subtitle-faq">Como cidadão, quero saber como colaborar na identificação de fake news</p>
          <p className="faq-answer">Você pode colaborar na identificação de fake news enviando notícias suspeitas
            ou links diretamente para o nosso chatbot, ele possui suporte para imagens, vídeos e texto.</p>
        </div>
      </div>
      <footer></footer>

      {modalOpen && (
        <div className="modal-view-information">
          <ModalViewAllNews
            data={selectedCardData}
            onClose={() => setModalOpen(false)}
          />
        </div>
      )}
    </div>
  )
}