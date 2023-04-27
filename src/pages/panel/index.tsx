import Catalog from "@/components/Catalog";
import {
  Box,
  Flex,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

export default function Panel() {
  const [showCatalog, setShowCatalog] = useState(true);
  const [showSales, setShowSales] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
        <Flex
          bg="#799D47"
          width={showMenu ? "200px" : "10px"}
          minH="100vh"
          zIndex="999"
          transition="0.2s ease all "
        >
          {showMenu && (
            <Flex
              flexDirection="column"
              alignItems="center"
              width="100%"
              py="20px"
            >
              <Image
                src="/assets/logoLogin.png"
                width="80"
                height="80"
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
                  width="20"
                  height="20"
                  alt="catalog"
                />
                <Text
                  color="white"
                  marginTop="8px"
                  fontSize="18px"
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
                  width="20"
                  height="20"
                  alt="vendas"
                />
                <Text
                  color="white"
                  marginTop="8px"
                  fontSize="18px"
                  fontWeight="400"
                >
                  Vendas
                </Text>
              </Box>
            </Flex>
          )}
          {showMenu ? (
            <ArrowLeftIcon
              bg="white"
              borderRadius="50%"
              fontSize="20px"
              padding="5px"
              position="absolute"
              marginTop="100%"
              marginLeft={showMenu ? "100px" : "0px"}
              cursor="pointer"
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <ArrowRightIcon
              bg="white"
              borderRadius="50%"
              fontSize="20px"
              padding="5px"
              position="absolute"
              marginTop="100%"
              marginLeft={showMenu ? "100px" : "0px"}
              cursor="pointer"
              onClick={() => setShowMenu(true)}
            />
          )}
        </Flex>
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
