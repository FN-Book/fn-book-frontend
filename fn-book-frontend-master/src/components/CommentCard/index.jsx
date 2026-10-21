import React, { useState } from 'react'
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia'
import './style.css'

export default function CommentCard({ name, photo, likes, text }) {
    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(likes)

    const handleLike = () => {
        if (liked) {
            setLiked(false)
            setLikeCount(likeCount - 1)
        } else {
            setLiked(true)
            setLikeCount(likeCount + 1)
        }
    }

    return (
        <div className="comment-container">
            <img src={photo} />
            <div className="comment-info-text">
                <p className="name">{name}</p>
                <p className="text">{text}</p>
            </div>
            <div className="comment-info-likes">
                <button onClick={handleLike} className="btn-like">
                    {liked ? <LiaHeartSolid size={24}/> : <LiaHeart size={24} />}
                </button>
                <p className="likes-counter">{likeCount}</p>
            </div>
        </div>
    )
}