import { Button } from "../../components/Button/Button"
import { buttonValue } from "../../data/ButtonValue"
import StyledHome from "./StyledHome"

export const Home = () => {
    return (
        <StyledHome>
            <h1>Devmories</h1>
            <div>
                <Button buttonValue={buttonValue.pve}/>
                <Button buttonValue={buttonValue.pvp}/>
            </div>
        </StyledHome>
    )
}