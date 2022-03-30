import React from "react";
import StyledProvider from "../styled/styled.provider";
import StoreProvider from "../store/store.provider";

const CompositeProvider: React.FC = ({ children }) => {
    return (
        <StoreProvider>
            <StyledProvider>
                {children}
            </StyledProvider>
        </StoreProvider>
    )
}

export default CompositeProvider;