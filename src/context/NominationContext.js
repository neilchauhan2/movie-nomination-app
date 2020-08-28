import React, { createContext, useReducer } from "react";
import NominationReducer from "./NominationReducer";

const nominations = localStorage.getItem("nominations")
    ? localStorage.getItem("nominations")
    : [
          { Title: "Avengers", imdbId: 1 },
          { Title: "Avengers Ultron", imdbId: 2 },
          { Title: "Avengers Infinity", imdbId: 3 }
      ];

const initState = {
    nominations
};

export const NominationContext = createContext(initState);

export const NominationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(NominationReducer, initState);

    const deleteNomination = (id) => {
        dispatch({
            type: "DELETE_NOMINATION",
            payload: id
        });
    };

    return (
        <NominationContext.Provider
            value={{ nominations: state.nominations, deleteNomination }}
        >
            {children}
        </NominationContext.Provider>
    );
};
