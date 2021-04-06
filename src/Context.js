import React, { useState, createContext } from "react";

export const StockContext = createContext();

export const StockProvider = (props) => {
  const [data, setData] = useState(null);
  const [stock, setStock] = useState("");
  const [search, setSearch] = useState("");

  return (
    <StockContext.Provider
      value={{
        value1: [data, setData],
        value2: [search, setSearch],
        value3: [stock, setStock],
      }}>
      {props.children}
    </StockContext.Provider>
  );
};
