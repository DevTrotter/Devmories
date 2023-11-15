import styled from 'styled-components'

const StyledHome = styled.section`
    width: 100%;
    height: 100%;
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    h1{
        color: #FFF;
        font-family: Poppins;
        font-size: 36px;
        font-style: normal;
        font-weight: 500;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export default StyledHome