import styled from "styled-components";

export const StyledInputWrapp = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledInputText = styled.input`
    border: 2px solid #67727e;
    transition: 0.3s;
    outline: none;
    height: 40px;
    font-size: 16px;
    width: 200px;
    padding: 10px;
    color: #67727e;
    &:focus {
        border-color: #c3c4ef;
        color: #324152;
    }
`;

export const StyledText = styled.p`
    padding: 0;
    margin: 0;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #67727e;
`;

export const StyledCreateButton = styled.input`
    margin: 0 auto;
    display: flex;
    width: 200px;
    height: 40px;
    border: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;
    background-color: rgb(103,114,126,0.7);
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 5px;
    transition: 0.3s;
    &:hover {
        background-color: rgb(103,114,126,1);
    }
`;