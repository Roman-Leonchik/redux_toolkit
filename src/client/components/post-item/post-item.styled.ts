import styled from "styled-components";

interface IButton {
    deleteColor?: boolean;
}

export const StyledPostItem = styled.div`
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    font-size: 16px;
    max-width: 500px;
    margin: 0 auto;
    text-align: left;
    &:not(:last-child){
        margin-bottom: 20px;
    }
`;

export const StyledPostTitle = styled.h3`
    font-size: 20px;
    margin: 0 0 15px;
`;

export const StyledPostText = styled.p`
    margin: 0;
`;

export const StyledButtonList = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
    margin-bottom: 10px;
`;

export const StyledButton = styled.button<IButton>`
    border: none;
    background: none;
    color: ${({deleteColor}) => deleteColor ? "#ff0030" : "#5457b6"};
    padding: 0;
    cursor: pointer;
    transition: 0.3s;
    opacity: 0.5;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
        opacity: 1;
    }
`;