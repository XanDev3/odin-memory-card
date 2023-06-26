import { useEffect, useState } from 'react'
import Card from './Card.js'
import GetSrc from './GetSrc.js'

function Board (/* props */) {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const loadCards = async () => {
      setCards(await GetSrc())
    }
    loadCards()
  }, [])

  const shuffleCards = () => {
    let shuffledCards = [...cards]
    let currentIndex = shuffledCards.length, randomIndex;

    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffledCards[currentIndex], shuffledCards[randomIndex]] = [
        shuffledCards[randomIndex], shuffledCards[currentIndex]]
    }

    setCards(shuffledCards);
  }

  return (
    <div className='board' id='Board' onClick={shuffleCards}>
      {cards.map(card => {
        return <Card id={card.id} src={card.src} key={card.id}></Card>
      })}
    </div>
  )
}

export default Board
