import React, { Component } from 'react'
import GuessCount from './GuessCount'
import Card from './Card'
import Formul from './Formulaire'
import './App.css'

class App extends Component {
  render() {

    const won = new Date().getSeconds() % 2 === 0
    console.log(won);
    return (
      <div className="memory" >
        <GuessCount guesses={0} />
        <Card card="😀" feedback="hidden" />
        <Card card="🎉" feedback="justMatched" />
        <Card card="💖" feedback="justMismatched" />
        <Card card="🎩" feedback="visible" />
        <Card card="🐶" feedback="hidden" />
        <Card card="🐱" feedback="justMatched" />
        <Formul logged />
        {won && (
          <p>
            GAGNE !
          </p>
        )}
      </div>
    )
  }
}

export default App
