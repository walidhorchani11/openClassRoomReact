import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const handleCardlick = (card) => {
  console.log(`card clicked : ${card}`)
}

const Card = ({card, feedback}) => (
  <div className={`card ${feedback}`} >
    <span className="symbol" onClick={() => handleCardlick(card)}>
      {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
    </span>
  </div>
)

export default Card