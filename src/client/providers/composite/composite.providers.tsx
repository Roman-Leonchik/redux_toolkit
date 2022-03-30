import React from "react";
import StyledProvider from "../styled/styled.provider";

const CompositeProvider: React.FC = ({ children }) => {
    return (
        <StyledProvider>
            {children}
        </StyledProvider>
    )
}

export default CompositeProvider;