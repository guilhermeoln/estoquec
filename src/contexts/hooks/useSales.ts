import { useContext } from "react";
import { SalesContext } from "../sales";
import ISale from "@/types/ISale";
import { salesInitial } from "@/mock/sales";

export const useSales = () => {
  const { sales, setSales } = useContext(SalesContext);

  const addSales = (sale: ISale) => {
    return setSales((previousState) => [...previousState, sale]);
  };

  const refetchSales = () => {
    setSales(salesInitial);
  };

  return {
    sales,
    setSales,
    addSales,
    refetchSales,
  };
};
