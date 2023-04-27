import Catalog from "@/components/Catalog";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

export default function Panel() {
  const [showCatalog, setShowCatalog] = useState(true);
  const [showSales, setShowSales] = useState(false);

  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

  return (
    <Flex width="100%" minHeight="100vh">
      {isLargerThan900 ? (
        <Flex
          width="200px"
          bgColor="#799D47"
          flexDirection="column"
          alignItems="center"
          py="30px"
        >
          <Image
            src="/assets/logoLogin.png"
            width="180"
            height="180"
            alt="logo"
          />
          <Box
            marginTop="50px"
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgColor={showCatalog ? "#94B665" : "transparent"}
            py="30px"
            cursor="pointer"
            _hover={{ bg: "#94B665", transition: "0.2s ease all" }}
            onClick={() => {
              setShowCatalog(true);
              setShowSales(false);
            }}
          >
            <Image
              src="/assets/logoCatalog.png"
              width="40"
              height="40"
              alt="catalog"
            />
            <Text
              color="white"
              marginTop="8px"
              fontSize="25px"
              fontWeight="400"
            >
              Catálogo
            </Text>
          </Box>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgColor={showSales ? "#94B665" : "transparent"}
            py="30px"
            cursor="pointer"
            _hover={{ bg: "#94B665", transition: "0.2s ease all" }}
            onClick={() => {
              setShowCatalog(false);
              setShowSales(true);
            }}
          >
            <Image
              src="/assets/logoSales.png"
              width="40"
              height="40"
              alt="vendas"
            />
            <Text
              color="white"
              marginTop="8px"
              fontSize="25px"
              fontWeight="400"
            >
              Vendas
            </Text>
          </Box>
        </Flex>
      ) : (
        ""
      )}

      <Flex
        width={isLargerThan900 ? "calc(100% - 200px)" : "100%"}
        height="100% "
        bgColor="#94B665"
      >
        {showCatalog && <Catalog />}
      </Flex>
    </Flex>
  );
}
