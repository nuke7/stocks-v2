import React, { useState, createContext } from "react";

export const StockContext = createContext();

export const StockProvider = (props) => {
  const [data, setData] = useState(null);

  const [search, setSearch] = useState("");

  return (
    <StockContext.Provider
      value={{
        value1: [data, setData],
        value2: [search, setSearch],
      }}>
      {props.children}
    </StockContext.Provider>
  );
};
