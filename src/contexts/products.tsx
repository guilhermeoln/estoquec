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
  const [products, setProducts] = useState<IProduct[] | []>([
    {
      description: "Iphone 12",
      category: "Pro Max",
      price: 2000,
    },
    {
      description: "Iphone 14",
      category: "Pro",
      price: 5200.5,
    },
    {
      description: "Iphone XS",
      category: "MAX",
      price: 1800.3,
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
