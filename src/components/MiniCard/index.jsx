import React, { useState } from 'react'
import Flag from '../Flag'
import './style.css'

export default function MiniCard({ image, topic, flag, title, text, link }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <a href={link}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-container">
                <div className="card-image" style={{
                    backgroundImage: isHovered ? `url(${image})` : `linear-gradient(180deg, rgba(0, 0, 0, 0) 65%, #000 100%), url(${image})`,
                    transition: 'background 0.3s ease',
                    marginBottom: '15px'
                }}>
                    <p className="topic">{topic}</p>
                </div>
                <Flag truth={flag} />
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </a >
    )
}
