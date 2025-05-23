import { createContext, useContext, useState } from "react";

const SortContext = createContext();

export function SortProvider({ children }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <SortContext.Provider value={{ sortConfig, handleSort }}>
      {children}
    </SortContext.Provider>
  );
}

export const useSort = () => useContext(SortContext);
