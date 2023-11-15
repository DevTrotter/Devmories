import styled from "styled-components";

const StyledButton = styled.div`
    background-color: #d670ff;
    border-radius: 6px;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);;
    margin: 24px;


    a:hover{
        box-shadow: 0 3px 4px rgba(0,0,0,0.50);
    }

    a{
        width: 250px;
        height: 80px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        text-decoration: none;
        box-shadow: 0 1px 2px rgba(0,0,0,0.15);
        transition: 300ms;
    }
`

export default StyledButton