import React, { createContext, useState, useContext } from 'react';

const MixContext = createContext();

export const MixProvider = ({ children }) => {
    const [totals, setTotals] = useState({
      calories: 0,
      protein: 0,
      fats: 0,
      carbs: 0,
      sodium: 0,
    });
  
    const updateTotals = (newTotals) => {
      setTotals(newTotals);
    };
  
    return (
      <MixContext.Provider value={{ totals, updateTotals }}>
        {children}
      </MixContext.Provider>
    );
  };

export const useMixContext = () => {
  const context = useContext(MixContext);
  if (!context) {
    throw new Error('useMixContext must be used within a MixProvider');
  }
  return context;
  };