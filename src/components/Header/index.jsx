import React from 'react'
import './style.css'
import Line1 from '../../assets/vectors/line1.svg'
import Line2 from '../../assets/vectors/line2.svg'

export default function Header() {
    return (
        <div className="header-container">
            <h1 className="title-header">Fake News Book</h1>
            <p className="header-subtitle">o seu <span>portal da verdade</span></p>
            <p className="header-lide">Fique por dentro das principais notícias do
                momento e tenha certeza que elas não são fake</p>
            <img src={Line1} className="line-1" />
            <img src={Line2} className="line-2" />
        </div>
    )
}
