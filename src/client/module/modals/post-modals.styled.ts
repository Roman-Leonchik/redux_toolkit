import styled from "styled-components";

export const StyledModals = styled.div`
    position: fixed;
    z-index: 10;
    padding: 30px;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    box-shadow: rgb(46 44 47) 0px 0px 5px;
    border-radius: 5px;
`;

export const StyledCloseModal = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 15px;
    height: 15px;
    overflow: hidden;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    &:before,
    &:after {
        content: "";
        width: 20px;
        height: 1px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        background-color: #000;
    }
    &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`;