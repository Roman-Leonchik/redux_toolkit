import React from "react";
import { Provider } from "react-redux";
import { setupStore } from "./store";

const StoreProvider: React.FC = ({ children }) => {
    const store = setupStore();

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default StoreProvider;