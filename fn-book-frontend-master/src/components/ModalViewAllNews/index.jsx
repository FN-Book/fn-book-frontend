import React, { useState, useEffect } from 'react'
import Input from '../Input'
import Flag from '../Flag'
import CommentCard from '../CommentCard'
import './style.css'

import { SlEye } from "react-icons/sl"
import { LiaHeart, LiaHeartSolid } from "react-icons/lia"
import { PiShareNetwork } from "react-icons/pi"
import { VscChromeClose } from "react-icons/vsc"
import { comments as newsData } from '../../mock/comments'

export default function ModalViewAllNews({ data, onClose, index }) {
    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(data.likes)

    const [comments, setComments] = useState([]);

    const handleLike = () => {
        if (liked) {
            setLiked(false)
            setLikeCount(likeCount - 1)
        } else {
            setLiked(true)
            setLikeCount(likeCount + 1)
        }
    }

    const handleShare = () => {
        const text =
            `Confira esta matéria no FN Book: *${data.title}* \nResultado da verificação: ${data.flag ? "VERDADE" : "MENTIRA"}`
        const url = "https://portalfnbook.vercel.app/"
        const encodedText = encodeURIComponent(`${text} ${url}`);
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`

        // Redireciona para o link do WhatsApp
        window.open(whatsappUrl, "_blank");
    }

    useEffect(() => {
        const news = newsData.find(item => item.newsId === data.id)
        if (news) {
            setComments(news.comments)
        }
    }, [data.id])

    return (
        <div className="modal-view-information">
            <div className="modal-view-information-content">
                <button onClick={onClose} className="btn-close"><VscChromeClose /></button>
                <div className="content">
                    <img className="img" src={data.image} />
                    <h1 className="content-title">{data.title}</h1>
                    <p className="content-text">{data.text}</p>
                    <div className="infos">
                        <div className="views">
                            <SlEye size={24} />
                            <p>{data.views}</p>
                        </div>
                        <div className="likes">
                            <button onClick={handleLike} className="btn-like">
                                {liked ? <LiaHeartSolid size={24} /> : <LiaHeart size={24} />}
                            </button>
                            <p className="likes-counter">{likeCount}</p>
                        </div>
                        <div className="share">
                            <PiShareNetwork size={24} onClick={handleShare} />
                            <p>{data.shares}</p>
                        </div>
                        <Flag truth={data.flag} />
                    </div>
                </div>
                <hr />
                <div className="comments">
                    <h1>Comentários</h1>
                    <div className="comments-content">
                        {comments.map((card) => (
                            <CommentCard
                                name={card.user.name}
                                photo={card.user.photo}
                                likes={card.likes}
                                text={card.content}
                            />
                        ))}
                    </div>
                    <Input
                        inputName="comment-text"
                        inputPlaceholder="Adicione um comentário..."
                    />
                </div>
            </div>
        </div>
    )
}
