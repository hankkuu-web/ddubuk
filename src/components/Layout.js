import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../assets/logo.svg';

const Header = styled.header`
    width: 100%;
    background-color: ${(props) => props.theme.bgColor};
    padding: 18px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 18px;
`;

const Wrapper = styled.div`
    max-width: 930px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > span {
        font-size: 30px;
        font-weight: 600;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    & > span {
        font-size: 20px;
        font-weight: 700;
    }   
`;


const Content = styled.main`
    margin: 0 auto;
    margin-top: 18px;
    max-width: 930px;
    width: 100%;
`;

const Footer = styled.footer`
    height: 50px;
`;

export default function Layout({ homeLink, children }){
    return (
        <>
            <Header>
                <Wrapper>
                    <Link to={homeLink}>
                        <div>
                            <Logo width="101px" height="38px" />
                        </div>
                    </Link>
                    <TextWrapper>
                        <span>스타트업의 모든 서비스를 체험하고 정성스러운 리뷰를 남겨주세요!</span>
                    </TextWrapper>
                </Wrapper>
            </Header>
            <Content>{children}</Content>
            <Footer />
        </>
    );
}