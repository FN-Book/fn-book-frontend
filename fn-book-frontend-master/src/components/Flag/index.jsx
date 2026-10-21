import React, { useState, useEffect } from 'react'
import './style.css'

export default function Flag({ truth }) {
    const [text, setText] = useState('')

    useEffect(() => {
        truth ? setText('Verdadeiro') : setText('Falso')
    }, [truth]);

    const containerColor = truth ? 'container-true' : 'container-false'
    const textColor = truth ? 'text-true' : 'text-false'

    return (
        <p className={textColor}>{text}</p>
    )
}
