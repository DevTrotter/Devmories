import { Card } from '../Card/Card'
import StyledGameArea from './StyledGameArea'

export const GameArea = ({cardArray}) => {
    return (
        <StyledGameArea>
            {
                cardArray.map((card,i) => (<Card key={i} card={card}/>))
            }
        </StyledGameArea>
    )
}
