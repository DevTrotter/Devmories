import styled from 'styled-components'

const StyledModalWin = styled.div`
    top: 0px;
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
    .container{
        background-color: black;
        border-radius: 12px;
        padding: 24px 36px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .button{
            background-color: #d670ff;
            border-radius: 6px;
            padding: 12px 24px;
            cursor: pointer;
        }
    }
    .background-modal{
        position: fixed;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: rgba(217, 217, 217, 0.1);
        box-shadow: inset 41.5px -41.5px 41.5px rgba(165, 165, 165, 0.1), inset -41.5px 41.5px 41.5px rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(7.055px);
    }
`

export default StyledModalWin