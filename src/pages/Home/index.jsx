import React from 'react'
import { Header } from '../../components'
import './style.css'

export default function Home() {
  return (
    <div className="main-container">
      <Header />
      <div className="maps"></div>
      <div className="carousel"></div>
      <div className="faq"></div>
      <div className="footer"></div>
    </div>
  )
}