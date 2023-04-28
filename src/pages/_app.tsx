import { ProductsProvider } from "@/contexts/products";
import { SalesProvider } from "@/contexts/sales";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProductsProvider>
        <SalesProvider>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </SalesProvider>
      </ProductsProvider>
    </>
  );
}
