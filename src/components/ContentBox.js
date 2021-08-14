import styled from 'styled-components';

const Container = styled.div`
    border-radius: 5px;
    background: ${props => props.color};
    border: 1px solid #e4e4e4;
    padding: 15px 13px;
    line-height: 14px;
    margin-top: 15px;
`;

function ContentBox({ children, boxColor }){
    return (
        <Container color={boxColor}>{ children }</Container>
    );
}
export default ContentBox;