import { createContext, useState } from "react";

// Create the context
export const CardContext = createContext();

// Context Provider Component
export const ContextProvider = ({ children }) => {
    const [CardData, setCardData] = useState([
        {
            
        }

    ]);

    return (
        <CardContext.Provider value={[CardData, setCardData]}>
            {children}
        </CardContext.Provider>
    );
};
