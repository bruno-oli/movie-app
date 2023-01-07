import React, { createContext, useRef, useState } from "react";

export const SuggestContext = createContext();

const SuggestProvider = ({ children }) => {
  const [data, setData] = useState(false);
  const [search, setSearch] = useState("");
  const modalRef = useRef(null);
  const suggestManuallyRef = useRef(null);
  return (
    <SuggestContext.Provider
      value={{ data, setData, search, setSearch, modalRef, suggestManuallyRef }}
    >
      {children}
    </SuggestContext.Provider>
  );
};

export default SuggestProvider;
