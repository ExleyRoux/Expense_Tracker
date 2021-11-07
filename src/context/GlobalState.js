import React, { createContext, useReducer } from 'react';

//Inital State
const InitalState = [
    {id:1, label: 'Flower', amount: -20},
    {id:2, label: 'Salary', amount: 300},
    {id:3, label: 'Book', amount: -10},
    {id:4, label: 'Camera', amount: 150},
];

//Create Context
export const GlobalContext = createContext(InitalState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(InitalState);
    return (
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    );
};
