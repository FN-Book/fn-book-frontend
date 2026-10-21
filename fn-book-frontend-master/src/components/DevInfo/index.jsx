import React, { useState } from 'react'
import './style.css'

export default function DevInfo({ devName, devFunction, devPhoto, devPhotoHover }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="card-dev"
            style={{ backgroundImage: `url(${isHovered ? devPhotoHover : devPhoto})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="text">
                <h1 className="dev-name">{devName}</h1>
                <p className="dev-function">{devFunction}</p>
            </div>
        </div>
    )
}