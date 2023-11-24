import { Link } from 'react-router-dom'
import StyledButton from './StyledButton'

export const Button = ({buttonValue, unavailable}) => {
    const {value, navPlace} = buttonValue
    return (
        <StyledButton unavailable={unavailable}>
            <Link to={navPlace}>{value}</Link>
        </StyledButton>
    )
}
