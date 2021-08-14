import ListItem from "../components/ListItem";
import { useForm } from "react-hook-form";
import Text from "../components/Text";
import styled from "styled-components";
import { InputContainer, TextArea } from '../components/Input';
import ContentBox from "../components/ContentBox";
import LongButton from "../components/LongButton";
import BlankBox from "../components/BlankBox";
import { useParams } from "react-router-dom";

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


function WritingReview({ category, name, desc }){
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
        <ListItem 
            category={"기본"}
            name={"마켓컬리"} 
            description={"당신의 리뷰를 원합니다. 새벽배송 참여자 모집 중!"}
            border={"transparent"}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
            <Text weight={700} size={"18px"}>리뷰를 작성해주세요.</Text>
            <QuesWrapper>
                <BlankBox size={"6px"} />
                <Text weight={400} size={"16px"} color={'#0084F4'}>Q. 리뷰 제목을 써주세요.</Text>
                <InputContainer>
                    <input 
                        type="text"
                        name={'title'}
                        {...register('title')}
                    />
                </InputContainer>

                {/* 서버에서 받아온 데이터 리스트로 뿌리기 */}
                <BlankBox size={"16px"} />
                <Text weight={400} size={"16px"} color={'#0084F4'}>Q. 첫번째질문.</Text>
                    <TextArea 
                        height={"124px"}
                        type="textarea"
                        name={"회사소개"}
                        {...register("회사소개")}
                    />
            </QuesWrapper>

            <ContentBox boxColor={"#e4e4e4"}>
                <Title>리뷰 작성 시 주의할 점!</Title>
                <Sentence>리뷰 양식에 맞추어 내용을 충분히 작성해주세요.</Sentence>
                <Sentence>명예 훼손, 저작권 침해 등의 내용이 포함되지 않도록 해주세요.</Sentence>
                <Sentence>비속어가 포함되지 않도록 주의해주세요.</Sentence>
                <Sentence>사용한 서비스와 작성한 리뷰가 일치하는지 확인해주세요.</Sentence>
                <Sentence>개인정보가 포함되지 않도록 주의해주세요.</Sentence>
            </ContentBox>
            <LongButton
                btnColor={'#0084F4'}
                btnName={'등록'}
            />
        </form>
        </>
    );
}
export default WritingReview;