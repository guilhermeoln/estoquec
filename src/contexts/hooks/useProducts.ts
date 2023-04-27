import { useContext } from "react";
import { ProductsContext } from "../products";
import { IProduct } from "@/types/IProduct";
import productsInitial from "@/mock/products";

export const useProducts = () => {
  const { products, setProducts } = useContext(ProductsContext);

  const addProducts = (product: IProduct) => {
    return setProducts((previousState) => [...previousState, product]);
  };

  const refetchProducts = () => {
    setProducts(productsInitial);
  };

  const filterProducts = (search: string) => {
    return setProducts(
      products.filter((product) => {
        return product.description.toUpperCase().includes(search);
      })
    );
  };

  return {
    products,
    setProducts,
    addProducts,
    refetchProducts,
    filterProducts,
  };
};
