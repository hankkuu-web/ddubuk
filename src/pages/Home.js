import Button from '../components/Button';
import Search from '../components/Search';
import styled from 'styled-components';
import ListItem from '../components/ListItem';
import routes from '../routes';
import axios from 'axios';
import useAsync from '../hooks/useAsync';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
`;

const Wrapper = styled.div`
`;

async function getCompanies(){
    // GET /api/companies
    const { data } = await axios.get(
        'http://ec2-18-221-139-75.us-east-2.compute.amazonaws.com:9001/api/companies/', {
            withCredentials: false,
        }
    );
    return data;
}

function Home({ accent, bgColor }){
    const [state, refetch] = useAsync(getCompanies, [], true);
    const history = useHistory();
    const { loading, data: companies, error } = state; // state.data 를 users 키워드로 조회

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if(!companies) return <div>없음</div>;
    //console.log(companies);
    return (
        <Container>
            <Button
                btnColor={accent}
                btnLink={routes.writingContent}
            >
                글쓰기
            </Button>
            <Search />
            <Wrapper>
                {companies.map(company => {
                    // console.log(company);
                    return (
                        <ListItem 
                            key={company.companyId}
                            category={"기본"}
                            name={company.companyName}
                            description={company.introduce}
                            link={`/content/:${company.companyId}`}
                            border={"#efeff0"}
                        />
                    )
                })}
            </Wrapper>
        </Container>
    );
}
export default Home;