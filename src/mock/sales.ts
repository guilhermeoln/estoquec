import ISales from "@/types/ISale";

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
        model: "PRO MAX",
        category: "IPHONE",
        price: 2000,
        quantifyBuy: 1,
      },
    ],
    paymentMethods: "pix",
    amount: 2000,
    purchaseDate: new Date().getDate(),
  },
  {
    id: 2,
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
        description: "IPHONE 14",
        model: "PRO MAX",
        category: "IPHONE",
        price: 5000,
        quantifyBuy: 1,
      },
    ],
    paymentMethods: "pix",
    amount: 5000,
    purchaseDate: new Date().getDate(),
  },
  {
    id: 3,
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
        model: "PRO",
        category: "IPHONE",
        price: 2000,
        quantifyBuy: 1,
      },
    ],
    paymentMethods: "pix",
    amount: 2000,
    purchaseDate: new Date().getDate() - 1,
  },
  {
    id: 4,
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
        description: "IPHONE 13",
        model: "PRO MAX",
        category: "IPHONE",
        price: 3200.3,
        quantifyBuy: 1,
      },
    ],
    paymentMethods: "pix",
    amount: 3200.3,
    purchaseDate: new Date().getDate(),
  },
];
