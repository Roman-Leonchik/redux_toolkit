import styled from "styled-components";

export const StyledModalsBack = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgb(0,0,0,0.3);
`;

export const StyledModals = styled.div`
    position: absolute;
    padding: 20px;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    border-radius: 10px;
`;

export const StyledTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const StyledTitle = styled.h3`
    margin: 0;
    padding: 0;
    color: #324152;
    font-size: 20px;
    text-transform: uppercase;
`;

export const StyledCloseModal = styled.button`
    position: relative;
    width: 20px;
    height: 20px;
    overflow: hidden;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    transition: 0.3s;
    opacity: 0.5;
    &:before,
    &:after {
        content: "";
        width: 30px;
        height: 2px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        background-color: #324152;
        transition: 0.3s;
    }
    &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
    &:hover {
        opacity: 1;
        &:before {
            transform: translate(-50%, -50%) rotate(135deg);
        }
        &:after {
            transform: translate(-50%, -50%) rotate(-135deg);
        }
    }
`;