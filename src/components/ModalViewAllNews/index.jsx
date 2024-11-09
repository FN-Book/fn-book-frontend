import React from 'react'
import './style.css'

export default function ModalViewAllNews({ data, onClose }) {
    return (
        <div className="modal-view-information">
            <div className="modal-view-information-content">
                <button onClick={onClose}>Fechar</button>
                <img src={data.image} />
            </div>
        </div>
    )
}
