import React from 'react'
import './style.css'

export default function Modal() {
    const comentarios = () => {
        const comments = [
            {
                foto: "link",
                name: "User one",
                comentario: "This is another"
            },
            {
                foto: "link",
                name: "User one",
                comentario: "This is another"
            }
        ];
        return(
            <div>
                {comments.map((Comment, index)=> (
                <div chave={index} className='comment'>
                    <img src={comment.foto} alt={comment.name} />
                    <p>{Comment.comentario}</p>
                </div>  
                
        )
    )
    }
    </div>
    );
    };

    return(
        <div className='Tela'>
            <div className='tela1'>
                <img src='' alt=''></img>
                <p></p>
            </div>
            <div className='tela2'>
                <h3>Comentários</h3>
                {comentarios()}
            </div>
        </div>
    )
    
}



