import { useForm } from "react-hook-form";
import styled from "styled-components";
import React, { useState } from 'react';
import { InputContainer, TextArea } from '../components/Input';
import Button from "../components/Button";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Text from '../components/Text'
import BlankBox from "../components/BlankBox";
import axios from 'axios';
import { inheritTrailingComments } from "@babel/types";
import { forEach } from "async";

const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
`;


const Wrapper = styled.div`
    
    max-width: 930px;
    width: 100%;

    & > form {
        display: flex;
        flex-direction: column;
    }    

    & > form > input {  
        border: 1px solid #0084F4;
        max-width: 930px;
        background-color: #0084F4;
        margin-right: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        border-radius: 0.75rem;
        padding: 0.75rem 0.75rem 0.7rem 1rem;
        font-size: 0.875rem;
        color: white;
        cursor: pointer;

    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: 1px solid #0084F4;
        background-color: #0084F4;
        color: white;
        cursor: pointer;
        margin: 15px 12px 15px 0;
    }

    & .defaultBtn {
        height: 30px;
        width: 64px;
        border-radius: 8px;
        font-size: 12px;
    }

    & .circleBtn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    & span {
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
    }
`;

const ButtonInputContainer = styled(InputContainer)`
    &:hover{
        > button {
            display: block;
            cursor: pointer;
            margin-right: 8px;
        }
    }
    > button {
        display: none;
        border: none;
    }
    &::placeholder {
        font-size: 14px;
        color: #0084F4;
    }

`;

async function patchCompany(payload){
    // PATCH /api/companies
    //console.log(payload);
    try{
        const response = await axios.post(
            'http://ec2-18-221-139-75.us-east-2.compute.amazonaws.com:9001/api/admin/register/members/', 
            payload, 
            { withCredentials: false },
        );
        console.log('Response: ', response);
    } catch(error){
        console.log(error)
    }
    
}

function WritingContentPage(){
    const FIELD_NAME = 'ques';

    const [indexes, setIndexes] = useState([]);
    const [counter, setCounter] = useState(1);
    const { register, handleSubmit, getValues } = useForm();

    const onSubmit = (data) => {
        // let questionsArray = [];
        // questionsArray.push(data.defaultQ);
        
        // if(data.ques){
        //     data.ques.map((q, index) => {
        //         questionsArray.push(q.value);
        //     })
        // };
        
        const payload = {
            // "companyId": counter,
            // "name": "default",
            // "profilePhotoUrl": "https://picsum.photos/1000/1000",
            "memberName": data.memberName,
            "phoneNumber": data.phoneNumber,
            "email": data.email,
            // "questions": questionsArray,
        };
        patchCompany(payload);
    };

    const addInput = () => {
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeInput = (index) => {
        setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setCounter(prevCounter => prevCounter - 1);
    };

    return (
        <Container>
            <Wrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Text weight={700} size={"18px"}>사람들과 사용할 닉네임 혹은 이름을 작성해주세요</Text>
                    <InputContainer>
                        <input
                            type="text"
                            placeholder={"이름을 작성해주세요."}
                            name={'memberName'}
                            {...register('memberName',{
                                required: "Intro is required.",
                                maxlength: 25,
                            })}
                        />
                    </InputContainer>
                    <BlankBox size={"14px"} />
                    <Text weight={700} size={"18px"}>연락받을 정보를 넣어 주세요.</Text>
                    <InputContainer>
                        <input
                            type="text"
                            placeholder={"연락처를 작성해주세요."}
                            name={'phoneNumber'}
                            {...register('phoneNumber',{
                                required: "phoneNumber is required.",
                                maxlength: 25,
                            })}
                        />
                    </InputContainer>
                    <InputContainer>
                        <input
                            type="text"
                            placeholder={"이메일을 작성해주세요."}
                            name={'email'}
                            {...register('email',{
                                required: "email is required.",
                                maxlength: 25,
                            })}
                        />
                    </InputContainer>
                    {/* <TextArea 
                        height={"124px"}
                        type="text"
                        placeholder={"이메일"}
                        name={'desc'}
                        {...register('desc')}
                    />
                    <TextArea 
                        height={"124px"}
                        type="text"
                        placeholder={"연락처."}
                        name={'serviceDesc'}
                        {...register('serviceDesc')}
                    /> */}
                    {/* <ButtonContainer>
                        <button className="defaultBtn">첨부하기</button>
                        <span>상세 이미지 파일을 첨부해주세요.</span>
                    </ButtonContainer> */}
                    {/* <Text weight={700} size={"18px"}>질문을 작성해주세요.</Text>
                    <InputContainer>
                        <input
                            type="text"
                            placeholder={"Q. 질문을 작성해주세요."}
                            name={`defaultQ`}
                            {...register(`defaultQ`)}
                        />
                    </InputContainer>
                    {indexes.map((index, i) => {
                        return (
                            <ButtonInputContainer>
                                <input 
                                    key={index.id}
                                    type="text"
                                    placeholder={"Q. 질문을 작성해주세요."}
                                    name={`${FIELD_NAME}[${i}].value`}
                                    {...register(`${FIELD_NAME}[${i}].value`)}
                                />
                                <button type="button" onClick={() => removeInput(index)}>
                                    <FontAwesomeIcon size="lg" icon={faTimes} />
                                </button>
                            </ButtonInputContainer>
                    );
                    })} */}
                    {/* <ButtonContainer>
                        <button className="circleBtn" type="button" onClick={() => addInput()}>
                            <FontAwesomeIcon color="white" size="lg" icon={faPlus} />
                        </button>
                        <span>질문을 추가해주세요.</span>
                    </ButtonContainer> */}
                    <input type="submit" />
                </form>
            </Wrapper>
        </Container>
        
    );
};
export default WritingContentPage;