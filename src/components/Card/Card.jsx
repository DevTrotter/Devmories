import StyledCard from './StyledCard'
import backCard from '../../assets/backCard.png'
import { useEffect, useState } from 'react'

export const Card = ({card, setSelectedCards, selectedCards}) => {
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    if (selectedCards.length === 2 && selectedCards[0] !== selectedCards[1] && selectedCards.includes(card)) {
          setTimeout(() => {
            setIsFlipped(false)
          }, 1000)
    }
  }, [selectedCards, card])

  const handleClick = () => {
    if (selectedCards.length < 2) {
      setIsFlipped(true)
      setSelectedCards([...selectedCards, card])
    }
  }
  return (
    <StyledCard onClick={handleClick}>
        {
          isFlipped ?
          <h1>{card}</h1> :
          <img src={backCard} alt="back of card" />
        }
    </StyledCard>
  )
}
