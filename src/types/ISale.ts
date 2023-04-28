import { IProduct } from "./IProduct";

export default interface ISale {
  id: number;
  buyerData: {
    name: string;
    cpf: string;
    telephone: string;
    adress: {
      cep: string;
      road: string;
      number: string;
      neighborhood: string;
      city: string;
      complement?: string;
    };
  };
  productData: IProduct[];
  paymentMethods: "pix" | "crédito" | "débito";
  amount: number;
  purchaseDate: Date | number;
}
