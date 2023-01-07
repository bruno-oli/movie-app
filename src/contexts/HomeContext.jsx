import React, { createContext, useState } from "react";

export const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    tab: "",
    search: "",
  });
  return (
    <HomeContext.Provider value={{ filters, setFilters }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
