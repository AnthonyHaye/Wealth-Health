// src/context/WealthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const WealthContext = createContext();

export const WealthContextProvider = ({ children }) => {
  const [employees, setEmployees] = useState(() => {
    // Chargement initial depuis le localStorage
    const stored = localStorage.getItem("employees");
    return stored ? JSON.parse(stored) : [];
  });

  // Sauvegarde à chaque modification
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  return (
    <WealthContext.Provider value={{ employees, addEmployee }}>
      {children}
    </WealthContext.Provider>
  );
};
