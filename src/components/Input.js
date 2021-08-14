import styled from "styled-components";

export const TextArea = styled.textarea`
    width: 100%;
    font: inherit;
    font-size: 14px;
    height: ${props => props.height};
    border-radius: 3px;
    padding: 8px;
    background-color: white;
    color: rgb(38, 38, 38);
    border: 0.5px solid black;
    box-sizing: border-box;
    margin-top: 15px;
    &::placeholder {
        font-size: 14px;
        color: #0084F4;
    }
    &:focus {
        border-color: #0084F4;
    }
    word-wrap: break-word;
    word-break: break-word;
    white-space: pre-wrap;
`;

export const Input = styled.input`
    width: 100%;
    font: inherit;
    font-size: 14px;
    height: ${props => props.height};
    border-radius: 3px;
    padding: 8px;
    background-color: white;
    color: rgb(38, 38, 38);
    border: 0.5px solid black;
    box-sizing: border-box;
    &::placeholder {
        font-size: 14px;
        color: #0084F4;
    }
    &:focus {
        border-color: #0084F4;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    border-radius: 3px;
    border: 1px solid black;
    height: 48px;

    > input{
        width: 97.5%;
        border: transparent;
        margin-left: 8px;
        &::placeholder {
            font-size: 14px;
            color: #0084F4;
        }
    }
`;