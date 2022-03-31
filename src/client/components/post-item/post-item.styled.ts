import styled from "styled-components";

export const StyledPostItem = styled.div`
    padding: 10px;
    border: 1px solid #eee;
    font-size: 16px;
    max-width: 600px;
    margin: 0 auto;
    &:not(:last-child){
        margin-bottom: 20px;
    }
`;

export const StyledPostTitle = styled.h3`
    font-size: 20px;
    margin: 0 0 15px;
`;

export const StyledPostDelete = styled.button`
    border: none;
    background-color: #333;
    border: 2px solid  #333;
    color: #eee;
    padding: 5px 10px;
    cursor: pointer;
    transition: 0.3s;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    &:hover {
        color: #333;
        background-color: #fff;
    }
`;