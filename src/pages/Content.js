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
        `http://ec2-18-221-139-75.us-east-2.compute.amazonaws.com:9001/api/goods/${index}`, {
            withCredentials: false,
        }
    );
    //console.log(data);
    return data;
}

async function getImages(index){
    // GET /api/companies/{companyId}
    const { data } = await axios.get(
        `http://ec2-18-221-139-75.us-east-2.compute.amazonaws.com:9001/api/admin/goods/${index}`, {
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
    const { loading, data: goods, error } = state;
    
    
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if(!goods) return <div>없음</div>;
    
    // const [state2, refetch2] = useAsync(() => getImages(goods.goodsId), [id]);
    // const { loading2, data: goodsImages, error2 } = state2;
    // console.log(goodsImages);

    return (
        <>
        <div>
            <img src={"https://modo-phinf.pstatic.net/20161214_58/1481674332104Mmf3I_JPEG/mosa0zJaaY.jpeg?type=round256_256"} className="img" />
        </div>
        <ListItem 
            category={goods.nationalName}
            goodsId={goods.goodsId}
            name={goods.goodsName}
            description={goods.cityName}
            orderPrice={goods.orderPrice}
            startDate={goods.startDate}
            endDate={goods.endDate}    
            paymentType={goods.paymentType}            
            border={"transparent"}
            link={'/'}
        />
        <Text weight={700} size={"18px"}>상품 & 서비스 소개</Text>
        <ContentBox>
            {goods.description}
        </ContentBox>
        <ContentBox>
            {goods.description}
        </ContentBox>
        <LongButton
            btnColor={'#0084F4'}
            btnName={'게더타운 여행 하러 가기'}
            btnLink={routes.writingReview}
            btnParams={goods}
        />
        </>
    );
}
export default Content;