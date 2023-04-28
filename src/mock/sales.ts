import ISales from "@/types/ISales";

export const salesInitial: ISales[] = [
  {
    id: 1,
    buyerData: {
      name: "Jardel Victor Souza",
      cpf: "111.111.111-11",
      telephone: "(81)99999-9999",
      adress: {
        cep: "50740-260",
        road: "Rua Paraiso do Norte",
        neighborhood: "Várzea",
        city: "Recife",
        number: "58",
      },
    },
    productData: [
      {
        imei: "111233345656",
        description: "IPHONE 12",
        category: "PRO",
        price: 2000,
        quantifyBuy: 1,
      },
    ],
    paymentMethods: "pix",
    amount: 2000,
  },
];
