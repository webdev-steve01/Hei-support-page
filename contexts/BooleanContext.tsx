"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type BooleanContextType = {
  value: boolean;
  setValue: (val: boolean) => void;
};

const BooleanContext = createContext<BooleanContextType | undefined>(undefined);

export const BooleanProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState(false);

  return (
    <BooleanContext.Provider value={{ value, setValue }}>
      {children}
    </BooleanContext.Provider>
  );
};

export const useBoolean = () => {
  const context = useContext(BooleanContext);
  if (!context) {
    throw new Error("useBoolean must be used within a BooleanProvider");
  }
  return context;
};
