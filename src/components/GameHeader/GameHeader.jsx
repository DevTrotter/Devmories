import StyledGameHeader from './StyledGameHeader'
import { MdOutlineReplay } from "react-icons/md";

export const GameHeader = () => {
    return (
        <StyledGameHeader>
            <div className='try-number'>
                1
            </div>
            <div className='time-counter'>
                1:1:1
            </div>
            <div className='replay'>
                <MdOutlineReplay />
            </div>
        </StyledGameHeader>
    )
}
