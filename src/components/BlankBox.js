import styled from "styled-components";

const BlankContainer = styled.div`
    width: 100%;
    height: ${props => props.size};
`;

function BlankBox({ size }){
    return <BlankContainer size={size} />;
}
export default BlankBox;