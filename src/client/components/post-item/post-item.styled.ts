import styled from "styled-components";

interface IButton {
    deleteColor?: boolean;
}

export const StyledPostItem = styled.div`
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    font-size: 16px;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    &:not(:last-child){
        margin-bottom: 20px;
    }
`;

export const StyledPostTitle = styled.h3`
    font-size: 20px;
    margin: 0 0 15px;
`;

export const StyledButtonList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

export const StyledButton = styled.button<IButton>`
    border: none;
    border: 2px solid ${({deleteColor}) => deleteColor ? "#ff0030" : "#516f2f"};
    background: ${({deleteColor}) => deleteColor ? "#ff0030" : "#516f2f"};
    color: #fff;
    padding: 5px 10px;
    cursor: pointer;
    transition: 0.3s;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    &:hover {
        background: #fff;
        color: ${({deleteColor}) => deleteColor ? "#ff0030" : "#516f2f"};
    }
`;