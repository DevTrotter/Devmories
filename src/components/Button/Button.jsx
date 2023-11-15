import { Link } from 'react-router-dom'
import StyledButton from './StyledButton'

export const Button = ({buttonValue}) => {
    const {value, navPlace} = buttonValue
    return (
        <StyledButton>
            <Link to={navPlace}>{value}</Link>
            <div>Salut cest un test pour git</div>
        </StyledButton>
    )
}
