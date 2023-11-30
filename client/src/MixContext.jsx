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
  
    const [currentMixDetails, setCurrentMixDetails] = useState(null);

    const updateTotals = (newTotals) => {
      setTotals(newTotals);
    };

    const updateMixDetails = (mixDetails) => {
      setCurrentMixDetails(mixDetails);
    }
  
    return (
      <MixContext.Provider value={{ totals, updateTotals, currentMixDetails, updateMixDetails }}>
        {children}
      </MixContext.Provider>
    );
  };

export const useMixContext = () => {
  const context = useContext(MixContext);

  // console.log('Context in useMixContext:', context);

  if (!context || !context.updateMixDetails) {
    throw new Error('useMixContext must be used within a MixProvider with a valid context');
  }
  return context;
  };