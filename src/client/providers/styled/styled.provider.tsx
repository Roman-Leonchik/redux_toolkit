import React from "react";
import { StyleSheetManager } from "styled-components";
import { StyledGlobal } from "./styled.styled";

const StyledProvider: React.FC = ({ children }) => {
    return (
        <StyleSheetManager>
            <>
                {children}
                <StyledGlobal />
            </>
        </StyleSheetManager>
    )
}

export default StyledProvider;