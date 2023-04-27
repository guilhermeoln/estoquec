import { ProductsProvider } from "@/contexts/products";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProductsProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ProductsProvider>
    </>
  );
}
