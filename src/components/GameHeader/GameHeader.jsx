import { useStopwatch } from 'react-timer-hook';
import StyledGameHeader from './StyledGameHeader'
import { MdOutlineReplay } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export const GameHeader = ({numberTry}) => {
    const {seconds,minutes,hours} = useStopwatch({autoStart: true});
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }
    
    return (
        <StyledGameHeader>
            <div className='try-number'>
                {numberTry}
            </div>
            <div className='time-counter'>
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <div className='replay' onClick={handleClick}>
                <MdOutlineReplay/>
            </div>
        </StyledGameHeader>
    )
}
