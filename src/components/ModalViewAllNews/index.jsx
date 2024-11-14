import React from 'react'
import './style.css'

// import { SlEye } from "react-icons/sl";

export default function ModalViewAllNews({ data, onClose }) {
    return (
        <div className="modal-view-information">
            <div className="modal-view-information-content">
                <button onClick={onClose} className="btn-close">Fechar</button>
                <div className="content">
                    <img src={data.image} />
                    <h1>{data.title}</h1>
                    <p>{data.text}</p>
                    <div className="infos">
                        <div className="views">
                            {/* <SlEye /> */}
                            <p>200</p>
                        </div>
                        <div className="likes">

                        </div>
                        <div className="share">

                        </div>
                    </div>
                </div>
                <hr />
                <div className="comments">
                    <h1>Comentários</h1>
                </div>
            </div>
        </div>
    )
}
