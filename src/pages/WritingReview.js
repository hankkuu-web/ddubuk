import ListItem from "../components/ListItem";
import { useForm } from "react-hook-form";
import Text from "../components/Text";
import styled from "styled-components";
import { InputContainer, TextArea } from '../components/Input';
import ContentBox from "../components/ContentBox";
import LongButton from "../components/LongButton";
import BlankBox from "../components/BlankBox";
import { useParams } from "react-router-dom";
import axios from 'axios';
import useAsync from '../hooks/useAsync';

const QuesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
`;

const Title = styled.div`
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 10px;
`;
const Sentence = styled.div`
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    margin-top: 8px;
`;

async function getCompanies(){
    // GET /api/companies
    const { data } = await axios.get(
        'http://ec2-18-221-139-75.us-east-2.compute.amazonaws.com:9001/api/orders/1/members', {
            withCredentials: false,
        }
    );
    return data;
}


function WritingReview({ category, name, desc }){
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const [state, refetch] =  useAsync( () => getCompanies(), []);
    const { loading, data: goods, error } = state;
    if(goods !== null) {

    }
    
    console.log(goods)
    return (
        <>
        <ListItem 
            category={"속초"}
            name={"소호259"} 
            description={"여행을 더 새롭게! 가상여행 참여자 모집 중!"}
            border={"transparent"}
        />
        <div>
        {goods !== null ? goods.members.map(member => {
                    // console.log(goods);
                    return (
                        <ListItem 
                            key={member.memberId}
                            goodsId={goods.goodsId}
                            category={goods.goods}
                            name={member.memberName}
                            orderPrice={goods.orderPrice}
                            startDate={member.reservationDate}
                            border={"#efeff0"}
                        />
                    )
                }) : null}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Text weight={700} size={"18px"}>주의 사항을 읽어주세요.</Text>
            {/* <QuesWrapper>
                <BlankBox size={"6px"} />
                <Text weight={400} size={"16px"} color={'#0084F4'}>Q. 리뷰 제목을 써주세요.</Text>
                <InputContainer>
                    <input 
                        type="text"
                        name={'title'}
                        {...register('title')}
                    />
                </InputContainer>

                
                <BlankBox size={"16px"} />
                <Text weight={400} size={"16px"} color={'#0084F4'}>Q. 첫번째질문.</Text>
                    <TextArea 
                        height={"124px"}
                        type="textarea"
                        name={"회사소개"}
                        {...register("회사소개")}
                    />
            </QuesWrapper> */}

            <ContentBox boxColor={"#e4e4e4"}>
                <Title>게더타운 여행 시 주의할 점!</Title>
                <Sentence>명예 훼손, 저작권 침해 등의 내용이 포함되지 않도록 해주세요.</Sentence>
                <Sentence>비속어가 포함되지 않도록 주의해주세요.</Sentence>
                <Sentence>개인정보가 포함되지 않도록 주의해주세요.</Sentence>
            </ContentBox>
            <LongButton
                btnColor={'#0084F4'}
                btnName={'시작'}
            />
        </form>
        </>
    );
}
export default WritingReview;