import styled from 'styled-components'

const StyledGameHeader = styled.header`
    width: 450px;
    height: 94px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    border: 2px white;
    border-radius: 0 0 24px 24px;
    padding: 12px 24px;

    div{
        width: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default StyledGameHeader