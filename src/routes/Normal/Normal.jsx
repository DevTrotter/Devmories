import { GameArea } from "../../components/GameArea/GameArea";
import { GameHeader } from "../../components/GameHeader/GameHeader"
import StyledNormal from "./StyledNormal"

export const Normal = () => {
    let cardArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]
    const shuffledCardArray = cardArray.sort((a, b) => 0.5 - Math.random());
    return (
        <StyledNormal>
            <GameHeader/>
            <GameArea cardArray={shuffledCardArray}/>
        </StyledNormal>
    )
}
