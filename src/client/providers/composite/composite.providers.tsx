import React from "react";
import StyledProvider from "../styled/styled.provider";
import StoreProvider from "../store/store.provider";
import { ModalsProvider } from "../modals/modals.providers";

const CompositeProvider: React.FC = ({ children }) => {
    return (
        <StoreProvider>
            <StyledProvider>
                <ModalsProvider>
                    {children}
                </ModalsProvider>
            </StyledProvider>
        </StoreProvider>
    )
}

export default CompositeProvider;