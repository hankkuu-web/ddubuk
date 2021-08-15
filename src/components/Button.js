import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';

const ButtonContainer = styled.div`
    width: 100%;
    position: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const ColoredButton = styled.button`
    position: relative;
    left: 865px;
    border: 1px solid ${props => props.color};
    background-color: ${props => props.color};
    color: white;
    height: 30px;
    width: 80px;
    margin-right: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
`;


function Button({ btnColor, btnLink, children }){
    console.log(btnLink);
    return (
        <ButtonContainer>
            <Link to={btnLink}>
                <ColoredButton color={btnColor}>
                    { children }
                </ColoredButton>
            </Link>
        </ButtonContainer>
    );
}
export default Button;