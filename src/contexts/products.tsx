import productsInitial from "@/mock/products";
import { IProduct } from "@/types/IProduct";
import React, { createContext } from "react";

import { useState } from "react";

interface IPropsContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[] | []>>;
}

export const ProductsContext = createContext<IPropsContext>(null!);

type Props = {
  children: React.ReactNode;
};

export const ProductsProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<IProduct[] | []>(productsInitial);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
