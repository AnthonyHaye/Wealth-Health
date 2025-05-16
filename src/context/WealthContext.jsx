// src/context/WealthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { generateFakeEmployee } from "../utils/fakeEmployee";

export const WealthContext = createContext();

export function generateMultipleFakeEmployees(count = 10) {
  return Array.from({ length: count }, () => generateFakeEmployee());
}

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

  const clearEmployees = () => {
  setEmployees([]);
  localStorage.removeItem("employees");
  };


  return (
    <WealthContext.Provider value={{ employees, addEmployee, clearEmployees }}>
      {children}
    </WealthContext.Provider>
  );
};
