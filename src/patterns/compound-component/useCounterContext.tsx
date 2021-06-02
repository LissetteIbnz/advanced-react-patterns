import React from "react";

interface CounterContextProps {
  count: Number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

const CounterContext = React.createContext<CounterContextProps | undefined>(undefined);

const CounterProvider: React.FC<{ value: CounterContextProps }> = ({ children, value }) => {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

function useCounterContext(): CounterContextProps {
  const context = React.useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
}

export { CounterProvider, useCounterContext };
