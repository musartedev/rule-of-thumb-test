import React, { useState, createContext } from 'react';

export const RulingContext = createContext([]);

export const RulingContextProvider = ({ children }) => {
  const [rulings, setRulings] = useState([]);

  return (
    <RulingContext.Provider value={[rulings, setRulings]}>
      {children}
    </RulingContext.Provider>
  );
};
