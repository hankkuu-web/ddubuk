import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const ItemContainer = styled.div`
    display: block;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    width: 100%;
    position: relative;
    cursor: pointer;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 auto;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${(props) => props.borderColor };

    > * {
        margin-bottom: 8px;
    }

    @media only screen and (max-width: 478px){
        
    }

    & .category {
        color: #0084F4;
        font-size: 14px;
    }

    & .name {
        font-weight: 700;
        font-size: 24px;
    }

`;

const Description = styled.div`
    font-size: 16px;
    color: rgb(112, 112, 112);
    line-height: 1.4em;
`;



function ListItem({ goodsId, category, date, name, description, orderPrice, startDate, endDate, paymentType, link, border }){
    const { pathname } = useLocation();
     console.log('link: ', link );
    return (
        <ItemContainer>
            <Link to={link}>
                <Item borderColor={border}>
                    <span className="category">{ category }</span>
                    <Description>{ description }</Description>
                    <span className="name">{ name }</span>
                    {startDate && endDate ? 
                        <div>
                        <span className="startDate">시작일: { startDate }</span>
                        <br />
                        <span className="endDate">종료일: { endDate }</span>
                        </div>
                        : null
                    }
                    
                    {link === "/" ? 
                        (
                            <div>
                                <span className="price">비용: { orderPrice }</span>
                                <br />
                                <span className="paymentType">지불방법: { paymentType }</span>
                                <br />
                            </div>
                        )
                     : <img src={"https://modo-phinf.pstatic.net/20161214_58/1481674332104Mmf3I_JPEG/mosa0zJaaY.jpeg?type=round256_256"} className="img" /> }
                    
                    
                </Item>
            </Link>
        </ItemContainer>
    );
}
export default ListItem;