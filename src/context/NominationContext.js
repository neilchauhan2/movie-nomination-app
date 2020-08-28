import React, { createContext, useReducer } from "react";
import NominationReducer from "./NominationReducer";

const nominations = localStorage.getItem("nominations")
    ? localStorage.getItem("nominations")
    : [];

const initState = {
    nominations
};

export const NominationContext = createContext(initState);

export const NominationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(NominationReducer, initState);

    return (
        <NominationContext.Provider value={{ nominations: state.nominations }}>
            {children}
        </NominationContext.Provider>
    );
};
