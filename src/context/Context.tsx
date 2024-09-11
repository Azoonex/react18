import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export type typeTabel = {
    description: string, 
    id: number;
    pending: boolean;
    status: string;
    utility: string;
}

export const Context_data = ({ children }) => {
    const [dataTabel, setdataTabel] = useState < typeTabel[] > ([]);

    return (
        <ThemeContext.Provider value={{ dataTabel, setdataTabel }}>
            {children}
        </ThemeContext.Provider>
    );
}
