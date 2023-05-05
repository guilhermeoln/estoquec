import { IProduct } from "@/types/IProduct";

const productsInitial: IProduct[] = [
  {
    imei: "112233445566",
    description: "Iphone 12",
    category: "IPHONE",
    model: "PRO",
    memory: "256GB",
    price: 2000,
  },
  {
    imei: "112244445566",
    description: "Iphone 14",
    model: "PRO",
    category: "IPHONE",
    memory: "128GB",
    price: 5200.5,
  },
  {
    imei: "112266445566",
    description: "Iphone XS",
    category: "IPHONE",
    model: "PRO",
    memory: "64GB",
    price: 1800.3,
  },
];

export default productsInitial;
