import React, { useState } from 'react'
// import data from '../../mock/news.json'

import { news } from '../../mock/news'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MiniCard from '../MiniCard'
import ModalViewAllNews from '../ModalViewAllNews'
import './style.css'

const Carousel = () => {
    const miniCardData = ([...news].sort((a, b) => b.views - a.views)).slice(3, 10)

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1740,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    gap: 2
                }
            }
        ]
    }

    const [modalOpen, setModalOpen] = useState(false)
    const [selectedCardData, setSelectedCardData] = useState(null)

    const viewAllInformations = (cardData, index) => {
        setSelectedCardData(cardData, index)
        setModalOpen(true)
    }

    const truncateText = (text, maxChars) => {
        return text.length > maxChars ? text.substring(0, maxChars) + "..." : text
    }

    return (
        <div className="container-main-carousel">
            <div className="container-carousel">
                <h2 className="title-carousel">Outras manchetes visitadas</h2>
                <Slider {...settings}>
                    {miniCardData.map((card, index) => (
                        <div>
                            <MiniCard
                                key={index}
                                image={card.image}
                                topic={card.topic}
                                flag={card.flag}
                                title={`#${index + 4} - ${card.title}`}
                                text={truncateText(card.text, 90)}
                                link={() => viewAllInformations(card, index)}
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
