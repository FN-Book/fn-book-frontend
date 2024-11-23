import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MiniCard from '../MiniCard'
import ModalViewAllNews from '../ModalViewAllNews'

// Importando imagens
import hobe from '../../assets/images/test/hobe.png'
import './style.css'    

const miniCardData = [
    {
        image: hobe,
        topic: "Entretenimento",
        flag: true,
        title: "J-Hope finaliza seu período de serviço militar",
        text: "Após servir ao exército coreano por 2 anos, o querido voltou à vida de um ser humano normal. Agora, ele está focado em reconectar com os fãs, explorar novos projetos e tentar decidir se quer um corte de cabelo diferente. É claro que as ARMYs (e o resto do mundo) ainda estão surtando de alegria com o retorno. Parece que as coisas finalmente estão voltando ao lugar no universo.",
        likes: 50
    },
    {
        image: hobe,
        topic: "Entretenimento",
        flag: false,
        title: "J-Hope desiste do exército",
        text: "Após servir ao exército coreano por 2 anos, o querido voltou à vida de um ser humano normal",
        likes: 50
    },
    {
        image: hobe,
        topic: "Entretenimento",
        flag: true,
        title: "J-Hope finaliza seu período de serviço militar",
        text: "Após servir ao exército coreano por 2 anos, o querido voltou à vida de um ser humano normal",
        likes: 50
    },
    {
        image: hobe,
        topic: "Entretenimento",
        flag: true,
        title: "J-Hope finaliza seu período de serviço militar",
        text: "Após servir ao exército coreano por 2 anos, o querido voltou à vida de um ser humano normal",
        likes: 50
    },
    {
        image: hobe,
        topic: "Entretenimento",
        flag: true,
        title: "J-Hope finaliza seu período de serviço militar",
        text: "Após servir ao exército coreano por 2 anos, o querido voltou à vida de um ser humano normal",
        likes: 50
    },
    {
        image: hobe,
        topic: "Entretenimento",
        flag: true,
        title: "J-Hope finaliza seu período de serviço militar",
        text: "Após servir ao exército coreano por 2 anos, o querido voltou à vida de um ser humano normal",
        likes: 50
    },
]

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    const [modalOpen, setModalOpen] = useState(false)
    const [selectedCardData, setSelectedCardData] = useState(null)

    const viewAllInformations = (cardData) => {
        setSelectedCardData(cardData)
        setModalOpen(true)
    }

    const truncateText = (text, maxChars) => {
        return text.length > maxChars ? text.substring(0, maxChars) + "..." : text
    }

    return (
        <div className="container-main-carousel">
            <div className="container-carousel">
                <Slider {...settings}>
                    {miniCardData.map((card, index) => (
                        <div>
                            <MiniCard
                                key={index}
                                image={card.image}
                                topic={card.topic}
                                flag={card.flag}
                                title={card.title}
                                text={truncateText(card.text, 91)}
                                link={() => viewAllInformations(card)}
                            />

                        </div>
                    ))}
                </Slider>
            </div>

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

export default Carousel
