import { useContext } from "react";
import { ProductsContext } from "../products";
import { IProduct } from "@/types/IProduct";

export const useProducts = () => {
  const { products, setProducts } = useContext(ProductsContext);

  const addProducts = (product: IProduct) => {
    return setProducts((previousState) => [...previousState, product]);
  };

  return {
    products,
    setProducts,
    addProducts,
  };
};
