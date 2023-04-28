import { salesInitial } from "@/mock/sales";
import ISale from "@/types/ISale";
import React, { createContext } from "react";

import { useState } from "react";

interface IPropsContext {
  sales: ISale[];
  setSales: React.Dispatch<React.SetStateAction<ISale[] | []>>;
}

export const SalesContext = createContext<IPropsContext>(null!);

type Props = {
  children: React.ReactNode;
};

export const SalesProvider = ({ children }: Props) => {
  const [sales, setSales] = useState<ISale[] | []>(salesInitial);

  return (
    <SalesContext.Provider value={{ sales, setSales }}>
      {children}
    </SalesContext.Provider>
  );
};
