import React, { createContext, useReducer } from "react";
import NominationReducer from "./NominationReducer";

const nominations = localStorage.getItem("nominations")
    ? JSON.parse(localStorage.getItem("nominations"))
    : [];

const initState = {
    nominations
};

export const NominationContext = createContext(initState);

export const NominationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(NominationReducer, initState);

    // Actions
    // Delete Nomination
    const deleteNomination = (id) => {
        dispatch({
            type: "DELETE_NOMINATION",
            payload: id
        });
    };

    // Add Nomination
    const addNomination = (nomination) => {
        dispatch({
            type: "ADD_NOMINATION",
            payload: nomination
        });
    };

    return (
        <NominationContext.Provider
            value={{
                nominations: state.nominations,
                deleteNomination,
                addNomination
            }}
        >
            {children}
        </NominationContext.Provider>
    );
};
