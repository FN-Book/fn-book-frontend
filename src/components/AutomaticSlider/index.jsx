import React from 'react'
import './style.css'

export default function AutomaticSlider({ children }) {
    return (
        <div className='slider'>
            <div className='slide-track'>
                {[...Array(32)].map((_, index) => (
                    <div className='slide' key={index}>
                        {children}
                    </div>
                ))}
            </div>
        </div>
    )
}
