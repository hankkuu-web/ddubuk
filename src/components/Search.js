import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const SearchContainer = styled.div`
    position: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 35px;
    background: #efeff0;
    border-radius: .5rem;
    padding-left: 12px;
    margin-top: 16px;
   
    & > input {
        width: 300px;
        height: 100%;
        padding-left: 12px;
        background: none;
        border: none;
        border-radius: 4px;
        outline: none;
        color: "#3C3C43";
        padding-right: 44px;
    }
`;

function Search(){
    return (
        <SearchContainer>
            <FontAwesomeIcon color="#3C3C43" size="lg" icon={faSearch} />
            <input placeholder="Search" />
        </SearchContainer>
    );
}
export default Search;