import React, { createContext, useState } from "react";

export const NumberContext = createContext(null);

export default function NumberContextProvider({ children }) {
  const [number, setNumber] = useState(null);

  return (
    <NumberContext.Provider value={{ number, setNumber }}>
      {children}
    </NumberContext.Provider>
  );
}
