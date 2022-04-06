import styled from "styled-components";

interface IProps {
    disabled?: boolean;
}

export const StyledPaginations = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

export const StyledPaginationsButton = styled.button<IProps>`
    border: 1px solid #5457b6;
    background: none;
    color: #5457b6;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    opacity: ${({disabled}) => disabled ? 0.5 : 1};
    pointer-events: ${({disabled}) => disabled && "none"};
`;