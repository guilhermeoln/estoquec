import { salesInitial } from "@/mock/sales";
import ISales from "@/types/ISales";
import React, { createContext } from "react";

import { useState } from "react";

interface IPropsContext {
  sales: ISales[];
  setSales: React.Dispatch<React.SetStateAction<ISales[] | []>>;
}

export const SalesContext = createContext<IPropsContext>(null!);

type Props = {
  children: React.ReactNode;
};

export const ProductsProvider = ({ children }: Props) => {
  const [sales, setSales] = useState<ISales[] | []>(salesInitial);

  return (
    <SalesContext.Provider value={{ sales, setSales }}>
      {children}
    </SalesContext.Provider>
  );
};
