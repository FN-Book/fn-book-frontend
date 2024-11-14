import React from 'react'
import './style.css'

export default function Input({ inputType, inputId, inputName, inputPlaceholder }) {
    return (
        <div className="input-container">
            <input
                type={inputType}
                id={inputId}
                name={inputName}
                placeholder={inputPlaceholder}
            />
        </div>
    )
}