import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [text , setText] = useState(' Initial value')

    return(
        <MyContext.Provider value={{text, setText}}>
            {children}
        </MyContext.Provider>
    )
}

export {MyProvider, MyContext}