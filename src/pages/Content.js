import ListItem from "../components/ListItem";
import Text from '../components/Text'
import ContentBox from "../components/ContentBox";
import LongButton from "../components/LongButton";
import { useParams } from "react-router-dom";
import axios from 'axios';
import useAsync from '../hooks/useAsync';
import routes from '../routes';

async function getCompany(index){
    // GET /api/companies/{companyId}
    const { data } = await axios.get(
        `http://ec2-18-221-139-75.us-east-2.compute.amazonaws.com:9001/api/companies/${index}`, {
            withCredentials: false,
        }
    );
    //console.log(data);
    return data;
}

function Content(){
    const params = useParams();
    const id = params.id.substring(1);
    
    const [state, refetch] = useAsync(() => getCompany(id), [id]);
    const { loading, data: company, error } = state;
    
    console.log(company);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if(!company) return <div>없음</div>;
    

    return (
        <>
        <div>company.profilePhotoUrl</div>
        <ListItem 
            category={"default"}
            name={company.name} 
            description={company.introduce}
            border={"transparent"}
            link={'/'}
        />
        <Text weight={700} size={"18px"}>기업 & 서비스 소개</Text>
        <ContentBox>
            {company.description}
        </ContentBox>
        <ContentBox>
            {company.serviceDescription}
        </ContentBox>
        <LongButton
            btnColor={'#0084F4'}
            btnName={'리뷰 작성하러 가기'}
            btnLink={routes.writingReview}
            btnParams={company}
        />
        </>
    );
}
export default Content;