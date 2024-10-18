import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel = () => {
    return (
        <ReactCarousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
            centerSlidePercentage={20}
        >
            <div>
                <img src="https://via.placeholder.com/400x300?text=Computer" alt="Computer" />
                <p className="legend">Computer</p>
            </div>
            <div>
                <img src="https://via.placeholder.com/400x300?text=Cupcake" alt="Cupcake" />
                <p className="legend">Cupcake</p>
            </div>
            <div>
                <img src="https://via.placeholder.com/400x300?text=Headphones" alt="Headphones" />
                <p className="legend">Headphones</p>
            </div>
        </ReactCarousel>
    );
};

export default Carousel;
