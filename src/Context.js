import React, { useState, createContext } from "react";

export const StockContext = createContext();

export const StockProvider = (props) => {
  const [data, setData] = useState(null);
  const [stock, setStock] = useState("");
  const [search, setSearch] = useState("");
  const [freq, setFreq] = useState("weekly");
  const [loading, setLoading] = useState(false);

  return (
    <StockContext.Provider
      value={{
        value1: [data, setData],
        value2: [search, setSearch],
        value3: [stock, setStock],
        value4: [freq, setFreq],
        value5: [loading, setLoading],
      }}>
      {props.children}
    </StockContext.Provider>
  );
};
