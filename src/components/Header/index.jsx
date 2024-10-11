import React from 'react'
import './style.css'

export default function Header() {
    return (
        <div className="header-container">
            <h1 className="title-header">Fake News Book</h1>
            <p className="header-subtitle">O seu portal da verdade</p>
            <p className="header-lide">Fique por dentro das principais notícias do
                momento e tenha certeza que elas não são fake</p>
        </div>
    )
}
