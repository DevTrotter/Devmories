import { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import StyledGameArea from './StyledGameArea'
import { GameHeader } from './../GameHeader/GameHeader';
import { ModalWin } from '../ModalWin/ModalWin';

export const GameArea = ({cardArray}) => {
    const [selectedCards, setSelectedCards] = useState([])
    const [numberTry, setNumberTry] = useState(0)
    const [numberMatch, setNumberMatch] = useState(0)
    const [isWin, setIsWin] = useState(false)
    useEffect(() => {
        if(numberMatch === cardArray.length/2){
            setIsWin(true)
        }else{
            if (selectedCards.length === 2) {
                setTimeout(() => {
                    setSelectedCards([])
                }, 1000)
            }
            if(selectedCards.length === 2 && selectedCards[0] !== selectedCards[1]){
                setNumberTry(numberTry + 1)
            }
            if(selectedCards.length === 2 && selectedCards[0] === selectedCards[1]){
                setNumberMatch(numberMatch + 1)
            }
        }
    }, [selectedCards])

    return (
        <StyledGameArea>
        <GameHeader numberTry={numberTry}/>
            {
                cardArray.map((card,i) => (<Card key={i} card={card} setSelectedCards={setSelectedCards} selectedCards={selectedCards}/>))
            }
        {
            isWin && <ModalWin/>
        }
        </StyledGameArea>
    )
}
