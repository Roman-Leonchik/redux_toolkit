import React from "react";
import {
    StyledPaginations,
    StyledPaginationsButton,
} from "./paginations.styled";

interface IProps {
    pagesAll: number;
    page: number;
    next: () => void;
    prev: () => void;
}

export const Paginations: React.FC<IProps> = ({pagesAll, page, next, prev}) => {
    return (
        <StyledPaginations>
            <StyledPaginationsButton onClick={prev} disabled={pagesAll !== page}>Prev</StyledPaginationsButton>
            <StyledPaginationsButton onClick={next} disabled={pagesAll === page}>Next</StyledPaginationsButton>
        </StyledPaginations>
    )
}