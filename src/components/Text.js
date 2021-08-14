import styled from 'styled-components';

const Span = styled.span`
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.fontColor};
`;

function Text({ children, weight, size, color }){
    return (
        <Span fontWeight={weight} fontSize={size} fontColor={color}>{ children }</Span>
    );
}
export default Text;