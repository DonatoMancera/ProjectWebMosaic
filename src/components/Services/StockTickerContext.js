import React, { createContext, useState } from 'react';

const StockTickerContext = createContext();

export const StockTickerProvider = ({ children }) => {
  const [stockTicker, setStockTicker] = useState({
    level: 50,
    name: 'Stock A',
  });

  const updateStockTicker = (level, name) => {
    setStockTicker({ level, name });
  };

  return (
    <StockTickerContext.Provider value={{ stockTicker, updateStockTicker }}>
      {children}
    </StockTickerContext.Provider>
  );
};

export const useStockTicker = () => {
  return React.useContext(StockTickerContext);
};