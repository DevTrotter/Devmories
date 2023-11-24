import { useNavigate } from 'react-router-dom'
import StyledModalWin from './StyledModalWin'

export const ModalWin = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(0)
    }
    return (
        <StyledModalWin>
            <div className='container'>
                <h1>Bravo vous avez gagnez !</h1>
                <p>Voulez vous rejouer une partie ?</p>
                <div className='button' onClick={handleClick}>Rejouer</div>
            </div>
            <div className="background-modal"></div>
        </StyledModalWin>
    )
}
