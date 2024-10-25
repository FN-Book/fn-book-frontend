import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MiniCard from '../MiniCard'

import Modal from '../Modal'

// Importando imagens
import hobe from '../../assets/images/test/hobe.png'
import jimin from '../../assets/images/test/jimin.png'
import jin from '../../assets/images/test/jin.png'
import jk from '../../assets/images/test/jk.png'
import rm from '../../assets/images/test/rm.png'
import tae from '../../assets/images/test/tae.png'
import yoongi from '../../assets/images/test/yoongi.png'

import './style.css'

const Carousel = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
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

    return (
        <div className="container-main-carousel">
            <div className="container-carousel">
                <Slider {...settings}>
                    <div>
                        <MiniCard 
                            image={hobe}
                            topic="Entretenimento"
                            flag={true}
                            title="J-Hope finaliza seu período de serviço militar"
                            text="Após servir ao exército coreano por 2 anos, o querido voltou à vida de um ser humano normal"
                            // link="https://music.youtube.com/watch?v=4u4d4GWdpo8&list=RDAMPLQP5Af3cx8TegAITWiiHGJ66HybaxKveGjjp"
                            onModalOpen={()=> setModalOpen(true)}
                        />

            {modalOpen && (
                <Modal onClose={() => setModalOpen(false)} /> // Renderiza o modal se modalOpen for true
            )}
                    </div>
                    <div>
                        <MiniCard
                            image={hobe}
                            topic="Entretenimento"
                            flag={false}
                            title="J-Hope finaliza seu período de serviço militar"
                            text="Após servir ao exército coreano por 2 anos, o querido voltou à vida de um ser humano normal"
                            onModalOpen={()=> setModalOpen(true)}
                        />
                    </div>
                    <div>
                        <img src={jimin} alt="Jimin" />
                    </div>
                    <div>
                        <img src={jin} alt="Jin" />
                    </div>
                    <div>
                        <img src={jk} alt="JK" />
                    </div>
                    <div>
                        <img src={rm} alt="RM" />
                    </div>
                    <div>
                        <img src={tae} alt="Tae" />
                    </div>
                    <div>
                        <img src={yoongi} alt="Yoongi" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Carousel
